import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SinglePagePorfolioDashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard/ansari.shohrab80@gmail.com' },
  {
    path: 'dashboard/:email',
    component: SinglePagePorfolioDashboardComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SinglePagePortfolioRoutingModule {}
