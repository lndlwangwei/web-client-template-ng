import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private host = 'http://localhost:8083';

  constructor(public httpClient: HttpClient) { }

  public getUsers(): Observable<User[]> {
    return this.httpClient.get(`${this.host}/applications`);
  }
}
