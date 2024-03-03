import { NgModule } from '@angular/core';
import { WorldPhoneInputComponent } from './world-phone-input.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown'
import { InputMaskModule } from 'primeng/inputmask' 

@NgModule({
  declarations: [
    WorldPhoneInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    DropdownModule,
    InputMaskModule,
  ],
  exports: [
    WorldPhoneInputComponent
  ]
})
export class WorldPhoneInputModule { }
