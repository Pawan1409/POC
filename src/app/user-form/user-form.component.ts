import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserDetailService } from '../user-detail.service';
import { User } from '../../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor(private userDetail:UserDetailService, private router:Router) { }

  userForm : FormGroup;
  user;
  ngOnInit() {
    this.userForm=new FormGroup({
      username:new FormControl('',Validators.required),
      first_name:new FormControl('',Validators.required),
      last_name:new FormControl('',Validators.required),
      email:new FormControl('',[Validators.required,Validators.email])
    })
  }

  onSubmit(){
    console.log(this.userForm.value)
    this.user=this.userForm.value;
    this.user=JSON.stringify(this.user)
    this.userDetail.addUserDetail(this.user).subscribe(()=>{
      this.router.navigate(['']);
    })
  }

}
