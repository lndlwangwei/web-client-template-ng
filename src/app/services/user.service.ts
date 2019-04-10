import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/User';
import {Observable} from 'rxjs';
import {Pagination} from '../models/Pagination';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://10.1.23.147:8888/users';

  constructor(public httpClient: HttpClient) { }

  public get(params: any): Observable<Pagination<User>> {
    return this.httpClient.get<Pagination<User>>(`${this.baseUrl}`, {params: params});
  }

  public add(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.baseUrl}`, user);
  }

  public update(user: User): Observable<User> {
    return this.httpClient.put<User>(`${this.baseUrl}/${user.id}`, user);
  }

  public delete(id: User): Observable<any> {
    return this.httpClient.delete<any>(`${this.baseUrl}/${id}`);
  }
}
