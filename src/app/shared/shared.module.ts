import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';
import { SplitterModule } from 'primeng/splitter';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CalendarModule } from 'primeng/calendar';
import { BasicDetailsFormComponent } from './components/basic-details-form/basic-details-form.component'
import { CountryService } from './services/country.service';
import { SocialInfoFormComponent } from './components/social-info-form/social-info-form.component';
import { ProjectsFormComponent } from './components/projects-form/projects-form.component';
import { ExperienceFormComponent } from './components/experience-form/experience-form.component';
import { SkillsFormComponent } from './components/skills-form/skills-form.component';
import { EducationFormComponent } from './components/education-form/education-form.component';
import { LanguageFormComponent } from './components/language-form/language-form.component';
@NgModule({
  declarations: [
    BasicDetailsFormComponent,
    SocialInfoFormComponent,
    ProjectsFormComponent,
    ExperienceFormComponent,
    SkillsFormComponent,
    EducationFormComponent,
    LanguageFormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AvatarModule,
    SplitterModule,
    DropdownModule,
    InputTextModule,
    ProgressSpinnerModule,
    CalendarModule,
  ],
  providers: [CountryService],
  exports: [
    BasicDetailsFormComponent,
    SocialInfoFormComponent,
    ProjectsFormComponent,
    ExperienceFormComponent,
    SkillsFormComponent,
    EducationFormComponent,
    LanguageFormComponent
  ]
})
export class SharedModule { }
