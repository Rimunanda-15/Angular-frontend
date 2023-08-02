import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../product/product.service';
import { Router } from '@angular/router';
import { CategoryServiceService } from '../category-service.service';

@Component({
  selector: 'app-category-input',
  templateUrl: './category-input.component.html',
  styleUrls: ['./category-input.component.scss']
})
export class CategoryInputComponent implements OnInit {
  
  categoryForm!: FormGroup;
  
  
  constructor(private formbuilder : FormBuilder, private service: CategoryServiceService, private router:Router){}
  
  
  ngOnInit(): void {
    this.categoryForm = this.formbuilder.group({
      name: ['', Validators.required]
    })
  }

  save(){
    this.categoryForm.markAllAsTouched();
    console.log(this.categoryForm.value);
    if (this.categoryForm.valid) {
      this.service.save(this.categoryForm.value).subscribe(resp => {
        if (resp.status == 200) {
          console.log('berhasil menambah user')
          this.router.navigate(['/','dashboard','category'])
        }
      })
    }
  }

}
