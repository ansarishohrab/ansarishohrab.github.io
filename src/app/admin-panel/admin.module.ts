import { NgModule } from '@angular/core';

import { RegisterComponent } from './components/register/register.component';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { HttpClientModule } from '@angular/common/http';
import { CountryService } from './services/country.service';

@NgModule({
  declarations: [RegisterComponent, HeaderComponent],
  imports: [
    AdminRoutingModule,
    CommonModule,
    SelectDropDownModule,
    HttpClientModule,
  ],
  providers: [CountryService],
})
export class AdminModule {}
