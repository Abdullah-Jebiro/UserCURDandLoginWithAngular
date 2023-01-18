import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PaginationComponent } from './pagination/components/pagination.component';



@NgModule({
  declarations: [
    PaginationComponent, 
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports:[
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    PaginationComponent
  ]
})
export class SharedModule { }