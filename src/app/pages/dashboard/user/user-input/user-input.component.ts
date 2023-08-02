import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss']
})
export class UserInputComponent implements OnInit {
  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(11),Validators.maxLength(13)]],
      email: ['', [Validators.required, Validators.email]],
    });
  } 

  constructor(private formBuilder: FormBuilder, private service: UserService, private router:Router){}

  userForm!: FormGroup

  save(){
    this.userForm.markAllAsTouched();
    console.log(this.userForm.value)

    if (this.userForm.valid) {
      this.service.save(this.userForm.value).subscribe(resp => {
        if (resp.status == 200) {
          console.log('berhasil menambah user')
          this.router.navigate(['/','dashboard','user'])
        }
      })
    }
  }
}
