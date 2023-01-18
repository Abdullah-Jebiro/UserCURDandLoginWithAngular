import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { IUserForCreateRequest } from '../../models/IUserForCreateRequest';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  
  createUserForm!:FormGroup;

  constructor(private service:UserService) {}

  ngOnInit(): void {
    this.createUserForm = new FormGroup({
    name:new FormControl(),
    job:new FormControl(),});

  }
  onSubmit():void{
    if ( /*this.loginForm.valid*/ true) {
      let user:IUserForCreateRequest =this.createUserForm.value;
      this.service.setUser(user).subscribe({
        next:result => {
         
        },
        error:err=> {
         alert(err)
        }
      }); 
    }
  }
}
