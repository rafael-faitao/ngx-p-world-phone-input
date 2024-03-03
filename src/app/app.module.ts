import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WorldPhoneInputModule } from './world-phone-input/world-phone-input.module';

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
