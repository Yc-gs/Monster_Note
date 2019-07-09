import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { EMPTY, of, Observable } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import { GetconfigService } from 'src/app/service/getconfig.service';

@Injectable({
  providedIn: 'root'
})
export class CustumerDetailResolverService implements Resolve<any> {

  constructor(private getConfig: GetconfigService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<never> {
    let id = route.paramMap.get('id');

    const api = `api/application/major-bank/${id}`
    return this.getConfig.get(api).pipe(
      take(1),
      mergeMap(panel => {
        if (panel) {
          return of(panel)
        } else { // id not found
          this.router.navigate(['/default/customers/customer-list'])
          return EMPTY
        }
      })
    );
  }
}
