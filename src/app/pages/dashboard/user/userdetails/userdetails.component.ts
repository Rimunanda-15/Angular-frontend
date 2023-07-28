import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit {

  userId!: number;
  user!: User;

  constructor(private router: Router,private activateRoute: ActivatedRoute, private service: UserService){}
  ngOnInit(): void {
    this.activateRoute.params.subscribe(param => {
      this.userId = param['id'];
    })
    this.getUser();
  }

  getUser(){
    this.service.findById(this.userId).subscribe(resp => {
      this.user = resp.body!;
    })
  }

  onClickDelete(){
    this.service.delete(this.userId).subscribe(resp =>{
      this.router.navigate(['/','dashboard','user']);
    })
  }
}
