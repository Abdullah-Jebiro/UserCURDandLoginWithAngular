import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

 loginForm!:FormGroup;

  constructor(private service:UserService ,private router: Router) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
    email:new FormControl(),
    password:new FormControl(),});
  }

  onSubmit():void{
    if ( /*this.loginForm.valid*/ true) {
      this.service.login(this.loginForm.value).subscribe({
        next:result => {
          this.service.setToken(result.token);
          this.router.navigate(['./User']);
        },
        error:err=> {
         alert(err)
        }
      }); 
    }
  }


}
