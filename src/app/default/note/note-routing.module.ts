import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoteViewComponent } from './note-view/note-view.component';
import { NoteEmptyComponent } from './note-empty/note-empty.component';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { NoteComponent } from './note.component';

const routes: Routes = [
  {
    path: 'note-content',
    component: NoteComponent,
    children: [
      {
        path: 'note-view/:noteId',
        component: NoteViewComponent
      },
      {
        path: 'note-empty',
        component: NoteEmptyComponent,
      },
      {
        path: 'note-edit/:noteId',
        component: NoteEditComponent,
      },
      { 
        path: '',
        redirectTo: 'note-empty',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'note-empty',
        pathMatch: 'full'
      },
    ]
  },
  { 
    path: '',
    redirectTo: 'note-content',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'note-content',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoteRoutingModule { }
