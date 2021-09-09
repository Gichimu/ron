import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatDividerModule,
    MatIconModule,
    FontAwesomeModule
  ]
})
export class AppMaterialModule { }
