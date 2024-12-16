import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSnackBarModule} from '@angular/material/snack-bar';

const material_design = [
  MatButtonModule,
  MatSidenavModule,
  MatSliderModule,
  MatSnackBarModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    material_design
  ],
  exports : [
    material_design
  ],
})
export class MaterialModule { }
