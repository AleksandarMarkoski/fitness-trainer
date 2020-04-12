import { Injectable } from '@angular/core';
import { UsersResponse, UserResponse } from '../responses/app.responses';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserRequest } from '../request/app.request';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  public httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'});
  public url: string = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) { }

  public getAllUsers(): Observable<UsersResponse>{
     return this.http.get<UsersResponse>(this.url)
  }

  public getUserDetails(id: String): Observable<UserResponse>{
    return this.http.get<UserResponse>(`${this.url}/${id}`);
  }

  public createUser(exercise: UserRequest): Observable<{ }> {
    return this.http.post<{ }>(`${this.url}/add-new`, exercise);
  }
}
