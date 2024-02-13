import { Component, OnInit } from '@angular/core';
import { PaginationComponent } from '../../../shared/pagination/pagination.component';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  paginationComponent = new PaginationComponent();
  
  constructor(){

  }
  ngOnInit(): void {
  }
}
