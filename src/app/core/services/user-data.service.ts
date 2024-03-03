import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { throwError, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, delay, map } from 'rxjs/operators';
import { User } from "../states/users/user.model";
import { DataServiceError } from "./data-error.service";
import { ApiInterceptor } from "../interceptors/api.interceptors";


@Injectable({ providedIn: "root" })
export class UserDataService {
 ApiInterceptors = new ApiInterceptor();
  //  apiUrlBase = this.ApiInterceptors.intercept;
     apiUrlBase ='http://localhost:3000/' ;


  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrlBase}/users`)
    .pipe(
      catchError(this.handleError)
    );
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrlBase}/users/${id}`)
    .pipe(
      catchError(this.handleError)
    );
  }

  addUser(user: User): Observable<User> {
    console.log(user);
    return this.http.post<User>(`${this.apiUrlBase}/users`, user)
    .pipe(
      catchError(this.handleError)
      );
  }

  deleteUser(user: User): Observable<User> {
    return this.http.delete(`${this.apiUrlBase}/users/${user.id}`)
    .pipe(
      map(() => user),
      catchError(this.handleError)
    );
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrlBase}/users/${user.id}`, user)
    .pipe(
      map(() => user),
      catchError(this.handleError)
    );
  }

  // private handleError<T>(requestData?: T) {
  //   return (res: HttpErrorResponse) => {
  //     const error = new DataServiceError(res.error, requestData);
  //     console.error(error);
  //     // return new ErrorObservable(error);
  //     return throwError(error);
  //   };
  // }

  private handleError(error: any): Observable<never> {
    console.error('Error adding user:', error);
    return throwError('Something went wrong, please try again later.');
  }
}
