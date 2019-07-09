import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './default/default.module#DefaultModule'
  },
  {
    path: 'passport',
    loadChildren: './passport/passport.module#PassportModule'
  },
  {
    path: '**',
    redirectTo: 'passport',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
