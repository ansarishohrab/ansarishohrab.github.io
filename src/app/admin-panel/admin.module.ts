import { NgModule } from '@angular/core';

import { RegisterComponent } from './components/register/register.component';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { HttpClientModule } from '@angular/common/http';
import { CountryService } from './services/country.service';
import { DpDatePickerModule } from 'ng2-date-picker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegisterComponent, HeaderComponent],
  imports: [
    AdminRoutingModule,
    CommonModule,
    SelectDropDownModule,
    HttpClientModule,
    DpDatePickerModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [CountryService],
})
export class AdminModule {}
