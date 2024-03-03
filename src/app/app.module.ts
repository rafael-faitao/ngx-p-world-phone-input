import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WorldPhoneInputModule } from 'projects/world-phone-input/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WorldPhoneInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
