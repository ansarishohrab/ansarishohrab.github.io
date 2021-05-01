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
import { BasicDetailsFormComponent } from './components/basic-details-form/basic-details-form.component';
import { SocialInfoFormComponent } from './components/social-info-form/social-info-form.component';
import { ProjectsFormComponent } from './components/projects-form/projects-form.component';
import { ExperienceFormComponent } from './components/experience-form/experience-form.component';
import { SkillsFormComponent } from './components/skills-form/skills-form.component';
import { EducationFormComponent } from './components/education-form/education-form.component';
import { LanguageFormComponent } from './components/language-form/language-form.component';
@NgModule({
  declarations: [RegisterComponent, HeaderComponent, BasicDetailsFormComponent, SocialInfoFormComponent, ProjectsFormComponent, ExperienceFormComponent, SkillsFormComponent, EducationFormComponent, LanguageFormComponent],
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
