import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UsersComponent } from './users/users.component';
import { ListUserComponent } from './list-user/list-user.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    AddUserComponent,
    EditUserComponent,
    UsersComponent,
    ListUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    SharedModule
    
  ]
})
export class UsersModule {

  userData: any[] = [];

  receiveData(data: any[]): void {
    this.userData = data;
  }
 }
