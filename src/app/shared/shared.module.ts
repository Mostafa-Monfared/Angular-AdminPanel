import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PaginationComponent } from './pagination/pagination.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HeaderComponent, SidebarComponent, PaginationComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,

  ],
  exports: [HeaderComponent , SidebarComponent , PaginationComponent]

})
export class SharedModule { }
