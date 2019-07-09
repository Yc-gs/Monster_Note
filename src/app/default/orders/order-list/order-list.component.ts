import { Component, OnInit } from '@angular/core';
import { GetconfigService } from 'src/app/service/getconfig.service';
import { Subject } from 'rxjs';
import { debounceTime, mergeMap, switchMap } from 'rxjs/operators';
let count = 0
@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  private subject$ = new Subject<any>()
  constructor(
    private httpSrv: GetconfigService,
  ) { }
  value: any
  ngOnInit() {
    this.subject$.pipe(
      debounceTime(1000),
      switchMap(params => {
        return this.httpSrv.get('api/application/school', params)
      })
    ).subscribe(() => {
    })
  }
  toHttp() {
    const params = {
      page: 1,
      page_size: 20
    }
    this.subject$.next(params)
  }

}
