import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InputProduct, Product } from 'src/app/model/Product';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpclient : HttpClient) {}

  findAll(){
    return this.httpclient.get<Product[]>(`${environment.api}/api/product`, {observe: "response"});
  }

  save(Input: InputProduct){
    return this.httpclient.post(`${environment.api}/api/product`, Input ,{observe: "response"});
  }
}
