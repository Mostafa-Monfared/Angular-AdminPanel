import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [{
  path: '', component: LayoutComponent, children: [
    {
      path: 'dashboard',
      loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
      path: '',
      redirectTo: '/layout/dashboard',
      pathMatch: 'full'
    },
    {
      path: 'users',
      loadChildren: () => import('../users/users.module').then(m => m.UsersModule)
    },
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
