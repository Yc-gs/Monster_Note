import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';
import { slideInAnimation } from '../animations';
import { NzTreeComponent, NzDropdownContextComponent, NzTreeNode, NzFormatEmitEvent, NzDropdownService } from 'ng-zorro-antd';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
  animations: [slideInAnimation]
})
export class DefaultComponent implements OnInit {
  isCollapsed = false;
  searchNote: string = ''
  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
  constructor(
    private auth: AuthService,
    private router: Router,
    private nzDropdownService: NzDropdownService
  ) { }
  ngOnInit() {
  }

  logOut() {
    this.auth.clear()
    this.router.navigate(['passport/login'])
  }

  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }




  @ViewChild('treeCom') treeCom: NzTreeComponent;
  dropdown: NzDropdownContextComponent;
  // actived node
  activedNode: NzTreeNode;
  nodes = [{
    title: '前端',
    key: '100',
    expanded: true,
    children: [
      {
        title: '行为',
        key: '1000',
        expanded: true,
        children: [
          { title: 'js', key: '10000', isLeaf: true },
          { title: 'ts', key: '10001', isLeaf: true },
        ]
      },
      { title: 'css', key: '1002', isLeaf: true },
      { title: 'html', key: '1003', isLeaf: true }
    ]
  }, {
    title: '后端',
    key: '101',
    children: [
      { title: 'java', key: '1010', isLeaf: true },
      { title: '.net', key: '1011', isLeaf: true }
    ]
  }];

  openFolder(data: NzTreeNode | NzFormatEmitEvent): void {
    // do something if u want
    if (data instanceof NzTreeNode) {
      data.isExpanded = !data.isExpanded;
    } else {
      data.node.isExpanded = !data.node.isExpanded;
    }
  }

  activeNode(data: NzFormatEmitEvent): void {
    if (this.activedNode) {
      // delete selectedNodeList(u can do anything u want)
      this.treeCom.nzTreeService.setSelectedNodeList(this.activedNode);
    }
    data.node.isSelected = true;
    this.activedNode = data.node;
    // add selectedNodeList
    this.treeCom.nzTreeService.setSelectedNodeList(this.activedNode);
  }

  contextMenu($event: MouseEvent, template: TemplateRef<void>): void {
    this.dropdown = this.nzDropdownService.create($event, template);
  }

  selectDropdown(type: string): void {
    this.dropdown.close();
    // do something
  }

}
