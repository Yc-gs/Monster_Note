import { Injectable, Injector } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../service/auth.service';
import { catchError } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd';
import { Router } from '@angular/router';
/** Pass untouched request through to the next request handler. */
@Injectable()
export class NoopInterceptor implements HttpInterceptor {
  constructor(
    private injector: Injector,
    private auth: AuthService,
    private msg: NzMessageService,
    private router: Router,
  ) { }


  private goTo(url: string) {
    this.router.navigate([url]).then(() => {
      // location.reload()
    })
  }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    // 获取TOKEN
    const authToken = this.auth.getAuthorizationToken() || ''
    // 给url加上前缀
    let url = req.url
    url = environment.apiHost + url
    const setReq = req.clone({
      url,
      // headers: req.headers.set('Authorization', authToken)
      // headers: req.headers.set('Authorization', authToken)
    })
    return next.handle(setReq).pipe(
      catchError(this.handleError)
    )
  }


  private handleError = (error: HttpErrorResponse) => {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.log(error.status)
      switch (error.status) {
        case 200:
          break;
        case 400:
          if (error.error) {
            this.msg.error(error.error.errMsg)
          }
          break;
        case 422:
        case 412:
          if (error.error) {
            this.msg.error(error.error)
          }
          break;
        case 401: // 未登录状态码
          this.auth.clear()
          this.goTo('/passport/login')
          if (error.error) {
            this.msg.error(error.error)
          }
          break;
        case 403:
        case 404:
        case 500:
          // this.goTo(`/${event.status}`);
          break;
        default:
          if (error instanceof HttpErrorResponse) {
            console.warn(
              '未可知错误，大部分是由于后端不支持CORS或无效配置引起',
              error,
            );
            this.msg.error(error.message);
          }
          break;
      }
    }
    return throwError(
      '错误，咱也不知道，咱也不敢问');
  };
}