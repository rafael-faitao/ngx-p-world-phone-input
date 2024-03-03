import { NgModule,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxWorldPhoneInputComponent } from './components/ngx-world-phone-input/ngx-world-phone-input.component';
import { InputMaskModule } from 'primeng/inputmask';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NgxWorldPhoneInputComponent],
  imports: [
    CommonModule,
    InputMaskModule,
    BrowserAnimationsModule,
    FormsModule,
    DropdownModule
  ],
  exports: [
    NgxWorldPhoneInputComponent
  ]
})
export class WorldPhoneInputModule { }
