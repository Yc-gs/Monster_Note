import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// #region third libs
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ObjectKeyPipe } from './pipe/object-key.pipe';
import { HtmlPipe } from './pipe/html.pipe';

const THIRDMODULES = [
  NgZorroAntdModule,
];

const COMPONENTS = [

];


const DIRECTIVES = [

];
const PIPE = [
  ObjectKeyPipe,
  HtmlPipe
];
const PROVIDERS = [
]

// #endregion

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    // third libs
    ...THIRDMODULES,
  ],
  declarations: [
    // your components
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPE,
  ],
  providers:[
    ...PROVIDERS
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    // third libs
    ...THIRDMODULES,
    // your components
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPE,
  ],
  entryComponents:[]
})
export class SharedModule {}
