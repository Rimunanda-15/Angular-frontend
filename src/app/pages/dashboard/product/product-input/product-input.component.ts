import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/Category';
import { CategoryServiceService } from '../../category/category-service.service';

@Component({
  selector: 'app-product-input',
  templateUrl: './product-input.component.html',
  styleUrls: ['./product-input.component.scss']
})
export class ProductInputComponent implements OnInit {

  productForm!: FormGroup;
  categories: Category[] = [];

  ngOnInit(): void {
    this.productForm = this.formbuilder.group({
      name: ['', Validators.required],
      stok: ['', Validators.required],
      categoryId: ['', Validators.required],
    })

    this.loadCategories();
  }

  constructor(private service: ProductService, private categoryService: CategoryServiceService ,private formbuilder: FormBuilder, private router:Router ){}

  loadCategories() {
    this.categoryService.findAll().subscribe(
      (response) => {
        this.categories = response.body || [];
      },
      (error) => {
        console.error('Failed to load categories:', error);
      }
    );
  }

  save() {
    if (this.productForm.invalid) {
      // Mark all fields as touched to trigger validation messages to show
      this.productForm.markAllAsTouched();
      return;
    }else{
      console.log(this.productForm.value);
      this.service.save(this.productForm.value).subscribe(resp => {
        if (resp.status == 200) {
          alert('berhasil menambah produk')
          this.router.navigate(['/','dashboard','product'])
        }
      })  
    }
  }
}
