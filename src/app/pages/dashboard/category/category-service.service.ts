import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category, InputCategory } from 'src/app/model/Category';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor(private httpclient: HttpClient) {}

  findAll(){
    return this.httpclient.get<Category[]>(`${environment.api}/api/category`, {observe: "response"});
  }
  save(Input: InputCategory){
    return this.httpclient.post(`${environment.api}/api/category`, Input ,{observe: "response"});
  }

  findById(id:number){
    return this.httpclient.get<Category>(`${environment.api}/api/category/${id}`, { observe: 'response' });
  }
  delete(id: number){
    return this.httpclient.delete<Category>(`${environment.api}/api/category/${id}`, { observe: 'response' });
  }
  update(id: number, categoryUpdate: InputCategory){
    return this.httpclient.put(`${environment.api}/api/category/${id}`, categoryUpdate ,{ observe: 'response' });
  }
}
