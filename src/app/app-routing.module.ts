import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [  
  {
    path: '',
    loadChildren: () =>
      import('./modules/auth/auth.module').then(m => m.AuthModule)
  } ,
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then(m => m.AuthModule)
  } ,
  {
    path: 'layout',
    loadChildren: () =>
      import('./modules/layout/layout.module').then(m => m.LayoutModule)
  } ,
  {
    path: 'profile',
    loadChildren: () =>
      import('./modules/profile/profile.module').then(m => m.ProfileModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
