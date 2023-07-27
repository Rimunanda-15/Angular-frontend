import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from 'src/app/model/Category';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor(private httpclient: HttpClient) {}

  findAll(){
    return this.httpclient.get<Category[]>(`${environment.api}/api/category`, {observe: "response"});
  }
}
