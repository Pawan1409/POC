import { Component, OnInit } from '@angular/core';
import { UserDetailService } from '../user-detail.service';
import { User } from '../../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent implements OnInit {

  constructor(private userDetail:UserDetailService, private router:Router) { }

  user:User[]; 
  
  ngOnInit() {
    this.userDetail.getAllUserDetails().subscribe(u=>(this.user=u))
  }

  addUser(){
    this.router.navigate(['addUser']);
  }

  deleteUser(id){
    this.userDetail.deleteUserDetail(id).subscribe(()=>{
      this.userDetail.getAllUserDetails().subscribe(u=>(this.user=u))
    })
  }
}
