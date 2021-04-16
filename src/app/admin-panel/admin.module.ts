import { NgModule } from '@angular/core';

import { RegisterComponent } from './components/register/register.component';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [RegisterComponent, HeaderComponent],
  imports: [AdminRoutingModule, CommonModule],
  providers: [],
})
export class AdminModule {}
