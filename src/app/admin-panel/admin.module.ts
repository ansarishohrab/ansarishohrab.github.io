import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { RegisterComponent } from './components/register/register.component';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from './services/register.service';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SharedModule } from '../shared/shared.module';
import { DialogService, DynamicDialogConfig, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
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
    ProgressSpinnerModule,
    SharedModule,
    DynamicDialogModule
  ],
  providers: [RegisterService, DialogService, DynamicDialogRef, DynamicDialogConfig],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AdminModule { }
