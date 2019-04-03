import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private host = 'http://localhost:8083';

  constructor(public httpClient: HttpClient) { }

  public getUsers(): Observable {
    return this.httpClient.get(`${this.host}/applications`);
  }
}
