import { NgModule } from '@angular/core';
import { CrLibComponent } from './cr-lib.component';
import { CrComponent } from './cr/cr.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CrLibComponent,
    CrComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CrComponent
  ]
})
export class CrLibModule { }
