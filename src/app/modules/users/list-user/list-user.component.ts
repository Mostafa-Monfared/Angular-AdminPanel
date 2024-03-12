import { Component, OnInit } from '@angular/core';
import { PaginationComponent } from '../../../shared/pagination/pagination.component';
import { UserDataService } from 'src/app/core/services/user-data.service';
import { User } from 'src/app/core/states/users/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users: User[] = [];
  rowNumber : number = 0;
  paginationComponent = new PaginationComponent();
  
  constructor(private userDataService : UserDataService , private router: Router){

  }
  ngOnInit(): void {
    this.getUsers();
  }
  onEditUser(event:any) {
    this.router.navigateByUrl('layout/users/edit');
};

  getUsers(): void {
    this.userDataService.getUsers()
      .subscribe(
        users => {
          this.users = users.map(user => {
            return { ...user, rowNumber: ++this.rowNumber };
          });
        },
        error => {
          console.error('Error fetching users:', error);
        }
      );
  }
}
