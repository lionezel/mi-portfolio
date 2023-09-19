import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    MatDividerModule,
    MatGridListModule
  ]
})
export class MaterialModule { }
