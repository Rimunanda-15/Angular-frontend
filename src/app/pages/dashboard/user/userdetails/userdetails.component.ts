import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from 'src/app/model/User';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit {

  userId!: number;
  user!: User;
  userUpdateForm!: FormGroup;

  constructor(private formbuilder: FormBuilder ,private router: Router,private activateRoute: ActivatedRoute, private service: UserService){}
  ngOnInit(): void {
    this.activateRoute.params.subscribe(param => {
      this.userId = param['id'];
    })
    this.getUser();

    this.userUpdateForm = this.formbuilder.group({
      name: this.formbuilder.control(null),
      email: this.formbuilder.control(null),
      phone: this.formbuilder.control(null)
    })
  }

  getUser(){
    this.service.findById(this.userId).subscribe(resp => {
      this.user = resp.body!;
      this.userUpdateForm.patchValue({
        name: this.user.name,
        email: this.user.email,
        phone: this.user.phone
      });
    })
  }

  update(){
    console.log(this.userUpdateForm.value);
    this.service.Update(this.userId,this.userUpdateForm.value).subscribe(resp => {
      if (resp.status == 200) {
        alert('user update berhasil')
        this.router.navigate(['/','dashboard','user']);
      }
    })  
  }

  onClickDelete(){
    this.service.delete(this.userId).subscribe(resp =>{
      alert('berhasil menghapus user');
      this.router.navigate(['/','dashboard','user']);
    })
  }
}
