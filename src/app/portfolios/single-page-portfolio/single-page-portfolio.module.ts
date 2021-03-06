import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SinglePagePortfolioRoutingModule } from './single-page-portfolio-routing.module';
import { SinglePagePorfolioDashboardComponent } from './components/dashboard/dashboard.component';
import { SinglePageFolioHeaderComponent } from './components/header/header.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { BasicInfoComponent } from './components/basic-info/basic-info.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './components/education/education.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';

@NgModule({
  declarations: [
    SinglePagePorfolioDashboardComponent,
    SinglePageFolioHeaderComponent,
    AboutMeComponent,
    BasicInfoComponent,
    ProjectsComponent,
    SkillsComponent,
    EducationComponent,
    LanguagesComponent,
    WorkExperienceComponent,

  ],
  imports: [
    SinglePagePortfolioRoutingModule,
    CommonModule,
    HttpClientModule,
    DynamicDialogModule
  ],
  providers: [DialogService],
})
export class SinglePagePortfolioModule { }
