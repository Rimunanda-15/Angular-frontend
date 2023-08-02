import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { Category } from 'src/app/model/Category';
import { CategoryServiceService } from '../../category/category-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productId!: number;
  productUpdateForm!: FormGroup;
  product!: Product;
  categories: Category[] = [];

  constructor(
    private categoryService: CategoryServiceService,
    private service: ProductService,
    private formbuilder: FormBuilder,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe((param) => {
      this.productId = param['id'];
    });

    this.getProduct();
    this.productUpdateForm = this.formbuilder.group({
      name: this.formbuilder.control(null),
      categoryId: this.formbuilder.control(null),
      stok: this.formbuilder.control(null),
    })
    this.loadCategories();
  }

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


  getProduct(){
    this.service.findById(this.productId).subscribe(resp => {
      this.product = resp.body!;
      this.productUpdateForm.patchValue({
        name: this.product.name,
        categoryId: this.product.categoryId,
        stok: this.product.stok
      });
    })
  }

  onClickDelete(){
    this.service.delete(this.productId).subscribe(resp =>{
      alert('berhasil menghapus user');
      this.router.navigate(['/','dashboard','product']);
    })
  }

  update(){
    console.log(this.productUpdateForm.value);
    this.service.update(this.product.id,this.productUpdateForm.value).subscribe( resp => {
      if (resp.status == 200) {
        alert('product update berhasil')
        this.router.navigate(['/','dashboard','product']);
      }
    })
  }

}
