import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Material stuff */
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  exports:[
    MatMenuModule,
    MatButtonModule,
    MatCheckboxModule]
})
export class CustomMaterialModule { }
