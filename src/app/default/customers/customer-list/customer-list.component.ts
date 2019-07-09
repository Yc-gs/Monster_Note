import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetconfigService } from 'src/app/service/getconfig.service';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  
  data: any[] = []
  content: any
  private keyupEvent$ = new Subject<any>()
  constructor(private route: ActivatedRoute,
    private getConfig: GetconfigService) { }
    ngOnInit() {
    //   this.route.data
    //   .subscribe((res: any) => {
    //     this.data = res.customerList.data.majors.data
    // })
    this.keyupEvent$.pipe(
      debounceTime(3000)
    ).subscribe((content: any) => {
      console.log(content)
      this.content = content
    })
  }
  keyupHandler(content: any) {
    this.keyupEvent$.next(content)
  }
  
}
