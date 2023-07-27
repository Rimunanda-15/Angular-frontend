import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/model/User';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpclient:HttpClient) {}

  findAll(){
    return this.httpclient.get<User[]>(`${environment.api}/api/user`, {observe: "response"});
  }

  findById(id: number){
    return this.httpclient.get<User>(`${environment.api}/api/user/${id}`, { observe: 'response' });
  }

}
