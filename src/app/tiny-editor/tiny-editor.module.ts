import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TinyEditorComponent } from './tiny-editor.component';

@NgModule({
  declarations: [TinyEditorComponent],
  imports: [
    CommonModule
  ],
  exports: [TinyEditorComponent]
})
export class TinyEditorModule { }
