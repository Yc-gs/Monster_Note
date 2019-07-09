import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {
  majors: any = {}
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }
  
  ngOnInit() {
    // this.customer$ = this.route.paramMap.pipe(
    //   map((params: ParamMap) => params.get('id'))
    // )
    // this.customer$.subscribe((id: string) => {
    //   this.customer = id
    // })
    this.route.data
    .subscribe((res: any) => {
      this.majors = res.customerDetail.data.major
    })
  }

}
