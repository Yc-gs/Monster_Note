import { Injectable, ElementRef } from '@angular/core';
import { NzModalService, NzModalRef } from 'ng-zorro-antd';
interface Confirm {
  title: string,
  content: string
}
@Injectable({
  providedIn: 'root'
})
export class ConfirmService {

  constructor(
    private modalService: NzModalService
  ) { }

  showNormalConfirm(option: Confirm, cb: () => void) {
    this.modalService.confirm({
      nzTitle: `<i>${option.title}</i>`,
      nzContent: `<b>${option.title}</b>`,
      nzOnOk: cb
    });
  }
}
