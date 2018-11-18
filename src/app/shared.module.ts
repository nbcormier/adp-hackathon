import { ClarityModule, ClrFormsNextModule } from '@clr/angular';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule }    from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ClarityModule,
    ClrFormsNextModule
  ]
})
export class SharedModule { }
