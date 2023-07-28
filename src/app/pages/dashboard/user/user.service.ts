import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/model/User';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpclient:HttpClient) {}

  delete(id: number){
    return this.httpclient.delete<User>(`${environment.api}/api/user/${id}`, { observe: 'response' });
  }

  findAll(){
    return this.httpclient.get<User[]>(`${environment.api}/api/user`, {observe: "response"});
  }

  findById(id: number){
    return this.httpclient.get<User>(`${environment.api}/api/user/${id}`, { observe: 'response' });
  }

  save(user: User){
    return this.httpclient.post<User>(`${environment.api}/api/user`, user ,{observe: "response"});
  }

}
