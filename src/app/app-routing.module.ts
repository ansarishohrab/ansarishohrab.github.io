import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import(
        './portfolios/single-page-portfolio/single-page-portfolio.module'
      ).then((m) => m.SinglePagePortfolioModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin-panel/admin.module').then((m) => m.AdminModule),
  },
  { path: '**', redirectTo: '/dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
