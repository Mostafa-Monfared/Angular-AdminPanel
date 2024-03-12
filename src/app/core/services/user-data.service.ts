import { Injectable } from "@angular/core";
import { throwError, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { User } from "../states/users/user.model";
import { Province } from "../states/province/province-model";


@Injectable({ providedIn: "root" })
export class UserDataService {

    private apiUrl = 'users';
    private provinceUrl = 'province';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl)
    .pipe(
      catchError(this.handleError)
    );
  }

  getProvince(): Observable<Province[]> {
    return this.http.get<Province[]>(this.provinceUrl)
    .pipe(
      catchError(this.handleError)
    );
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`)
    .pipe(
      catchError(this.handleError)
    );
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user)
    .pipe(
      catchError(this.handleError)
    );
  }

  deleteUser(user: User): Observable<User> {
    return this.http.delete(`${this.apiUrl}/${user.id}`)
    .pipe(
      map(() => user),
      catchError(this.handleError)
    );
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${user.id}`, user)
    .pipe(
      map(() => user),
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error);
  }
}
