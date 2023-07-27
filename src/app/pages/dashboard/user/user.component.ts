import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userList: User[] = [];

  constructor(private service:UserService){}
  ngOnInit(): void {
    this.getTableList();
  }

  getTableList(){
    this.service.findAll().subscribe(resp => {
      this.userList = resp.body!;
      console.log(resp.status)
      console.log('status code : ${resp.status}')
      console.log(resp.body)

    })
  }

}
