import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productList: Product[] = [];

  constructor(private service:ProductService){}

  ngOnInit(): void {
    this.getTableList();
  }

  getTableList(){
    this.service.findAll().subscribe(resp =>{
      this.productList = resp.body!;
    })
  }

}
