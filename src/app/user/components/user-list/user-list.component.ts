import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { IUserWithPage } from 'src/app/user/models/IUserWithPage';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent {
  title = 'User';
  
  Users!:IUserWithPage;
  sub!:Subscription;


  constructor(private userService:UserService , private router: Router){}
 
  ngOnInit():void{
    this.sub=this.userService.getUsers().subscribe({
      next:data=>{ 
        this.Users=data
    }});   
      
  }

  onLogout(){
  localStorage.removeItem('token');
  this.router.navigate(['./Login']);
  }

 
  onChangePage(numberPage: number) {
    // update current page of items
    this.sub=this.userService.getUsers(numberPage).subscribe({
      next:data=>{
        this.Users=data
      }});   
  }


}