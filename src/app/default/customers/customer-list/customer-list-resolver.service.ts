import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { EMPTY, of, Observable } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import { GetconfigService } from 'src/app/service/getconfig.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerListResolverService {

  constructor(private getConfig: GetconfigService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<never> {
    const api = 'api/application/major-bank'
    const params = {
      page: 1,
      prePage: 10
    }
    return this.getConfig.get(api, params)
  }
}
