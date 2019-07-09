import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { GetconfigService } from 'src/app/service/getconfig.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.scss']
})
export class NoteEditComponent implements OnInit {

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
