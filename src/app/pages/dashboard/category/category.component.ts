import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/Category';
import { CategoryServiceService } from './category-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit{
  categoryList: Category[] = [];

  constructor(private service: CategoryServiceService){}
  ngOnInit(): void {
    this.getTableList();
  }

  getTableList(){
    this.service.findAll().subscribe(resp => {
      this.categoryList = resp.body!;
      console.log(resp.status)
      console.log('status code : ${resp.status}')
      console.log(resp.body)
    })
  }
}
