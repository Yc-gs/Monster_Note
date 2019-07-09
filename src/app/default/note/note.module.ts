import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoteRoutingModule } from './note-routing.module';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { NoteComponent } from './note.component';
import { NoteViewComponent } from './note-view/note-view.component';
import { NoteEmptyComponent } from './note-empty/note-empty.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TinyEditorModule } from 'src/app/tiny-editor/tiny-editor.module';

@NgModule({
  declarations: [NoteEditComponent, NoteComponent, NoteViewComponent, NoteEmptyComponent],
  imports: [
    CommonModule,
    NoteRoutingModule,
    SharedModule,
    TinyEditorModule,
  ]
})
export class NoteModule { }
