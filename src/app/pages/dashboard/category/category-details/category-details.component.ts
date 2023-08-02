import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/Category';
import { CategoryServiceService } from '../category-service.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent implements OnInit {
  categoryId!: number;
  category!: Category;
  categoryUpdateForm!: FormGroup;

  constructor(private formbuilder: FormBuilder ,private router: Router,private activateRoute: ActivatedRoute, private service: CategoryServiceService){}

  
  ngOnInit(): void {
    this.activateRoute.params.subscribe(param => {
      this.categoryId = param['id'];
    })

    this.getCategory();

    this.categoryUpdateForm = this.formbuilder.group({
      name: this.formbuilder.control(null)
    })
  }

  getCategory(){
    this.service.findById(this.categoryId).subscribe(resp => {
      this.category = resp.body!;
      this.categoryUpdateForm.patchValue({
        name: this.category.name
      });
    })
  }

  update(){
    console.log(this.categoryUpdateForm.value);
    this.service.update(this.categoryId,this.categoryUpdateForm.value).subscribe(resp => {
      if (resp.status == 200) {
        alert('category update berhasil')
        this.router.navigate(['/','dashboard','category']);
      }
    })  
  }

  onClickDelete(){
    this.service.delete(this.categoryId).subscribe(resp =>{
      alert('berhasil menghapus category');
      this.router.navigate(['/','dashboard','category']);
    })
  }


}
