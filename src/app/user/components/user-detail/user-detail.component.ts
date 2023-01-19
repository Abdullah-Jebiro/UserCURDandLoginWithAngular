import { Component } from '@angular/core';
import { map, Observable, Subscription } from 'rxjs';
import { IUser } from 'src/app/user/models/IUser';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {


  User:IUser|undefined;
  private subs = new SubSink();
  
  constructor(
    private userService:UserService ,
    private route:ActivatedRoute 
  ){}
 
  ngOnInit():void{
    
   let id = Number(this.route.snapshot.paramMap.get('id'));
   console.log(id);
    this.subs.sink=this.userService.getUser(id).subscribe({
      next:User=>{
        this.User=User
      }}); 
  }
  
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  
}
