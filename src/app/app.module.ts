
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AccountModule } from "./account/account.module";
import { AppComponent } from "./app.component";
import { SharedModule } from './shared/shared.module';
import { UserGuard } from "./user/user.guard";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AccountModule,


    RouterModule.forRoot([
      {path:'User', loadChildren:()=>
         import('./user/user.module')
         .then( u => u.UserModule)
         , canActivate:[UserGuard]
      },

      {path:'' ,redirectTo:'Login' , pathMatch:'full'},
      {path:'**' ,redirectTo:'Login' , pathMatch:'full'}
    ]),
   
       
          
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
