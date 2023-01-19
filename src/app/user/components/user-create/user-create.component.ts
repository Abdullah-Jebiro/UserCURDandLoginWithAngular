import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { alert , AlertType } from 'src/app/shared/pagination/models/alter';
import { IUserForCreateRequest } from '../../models/IUserForCreateRequest';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  
  createUserForm!:FormGroup;
  alert = new alert(AlertType.none,'');

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
          console.log(result);
          this.alert = new alert(AlertType.Success,`The user ${result.name} was added successfully on ${result.createdAt.toString()}`)
        },
        error:err=> {
          this.alert = new alert(AlertType.Warning,err)
        }
      });
    }
  }
}
