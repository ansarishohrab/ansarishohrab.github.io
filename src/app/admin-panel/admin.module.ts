import { NgModule } from '@angular/core';

import { RegisterComponent } from './components/register/register.component';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryService } from './services/country.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from './services/register.service';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { AvatarModule } from 'primeng/avatar';
import { SplitterModule } from 'primeng/splitter';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CalendarModule } from 'primeng/calendar';
@NgModule({
  declarations: [RegisterComponent, HeaderComponent],
  imports: [
    AdminRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    AccordionModule,
    AvatarModule,
    SplitterModule,
    DropdownModule,
    InputTextModule,
    ProgressSpinnerModule,
    CalendarModule,
  ],
  providers: [CountryService, RegisterService],
})
export class AdminModule {}
