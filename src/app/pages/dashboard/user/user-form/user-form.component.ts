import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  addUser!: User;
  phone: any;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private service: UserService){
    this.addUser = new User();
  }

  ngOnInit(): void {
    this.onSubmit();
  }

  onSubmit(){
    this.service.save(this.addUser).subscribe(response =>{
      this.router.navigate(['/','dashboard','user']);
    })
  }

}
