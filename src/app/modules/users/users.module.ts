import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UsersComponent } from './users/users.component';
import { ListUserComponent } from './list-user/list-user.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ControlMessagesComponent } from 'src/app/shared/control-message/control-message-component';
import { AppComponent } from 'src/app/app.component';




@NgModule({
  declarations: [
    AddUserComponent,
    EditUserComponent,
    UsersComponent,
    ListUserComponent,
    ControlMessagesComponent

  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
    
  ]
})
export class UsersModule {

 }
