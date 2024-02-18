import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { throwError, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, delay, map } from 'rxjs/operators';
import { User } from "../states/users/user.model";
import { DataServiceError } from "./data-error.service";


@Injectable({ providedIn: "root" })
export class UserDataService {

  apiUrlBase = environment.apiUrlBase;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrlBase}/users`)
    .pipe(
      catchError(this.handleError())
    );
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrlBase}/users/${id}`)
    .pipe(
      catchError(this.handleError())
    );
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrlBase}/users/`, user)
    .pipe(
      catchError(this.handleError(user))
    );
  }

  deleteUser(user: User): Observable<User> {
    return this.http.delete(`${this.apiUrlBase}/users/${user.id}`)
    .pipe(
      map(() => user),
      catchError(this.handleError(user))
    );
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrlBase}/users/${user.id}`, user)
    .pipe(
      map(() => user),
      catchError(this.handleError(user))
    );
  }

  private handleError<T>(requestData?: T) {
    return (res: HttpErrorResponse) => {
      const error = new DataServiceError(res.error, requestData);
      console.error(error);
      // return new ErrorObservable(error);
      return throwError(error);
    };
  }
}
