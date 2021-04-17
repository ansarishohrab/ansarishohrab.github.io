import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectDropDownModule } from 'ngx-select-dropdown';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SelectDropDownModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
