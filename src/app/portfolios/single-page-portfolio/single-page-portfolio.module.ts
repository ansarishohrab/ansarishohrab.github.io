import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SinglePagePortfolioRoutingModule } from './single-page-portfolio-routing.module';
import { SinglePagePorfolioDashboardComponent } from './components/dashboard/dashboard.component';
import { SinglePageFolioHeaderComponent } from './components/header/header.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { WebsiteComponent } from './components/website/website.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './components/education/education.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';

@NgModule({
  declarations: [
    SinglePagePorfolioDashboardComponent,
    SinglePageFolioHeaderComponent,
    AboutMeComponent,
    WebsiteComponent,
    ProjectsComponent,
    SkillsComponent,
    EducationComponent,
    LanguagesComponent,
    WorkExperienceComponent,
  ],
  imports: [SinglePagePortfolioRoutingModule],
  providers: [],
})
export class SinglePagePortfolioModule {}
