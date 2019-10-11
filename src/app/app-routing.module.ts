import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { PurchaseTicketsComponent } from './purchase-tickets/purchase-tickets.component';
import { ExhibitorsComponent } from './exhibitors/exhibitors.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RulesComponent } from './rules/rules.component';

const routes: Routes = [
  {
    path: 'home',
    redirectTo: '/about',
    pathMatch: 'full'
  },
  {path: 'about', component: AboutComponent},
  {path: 'purchase-tickets', component: PurchaseTicketsComponent},
  {path: 'exhibitors', component: ExhibitorsComponent},
  {path: 'rules', component: RulesComponent},
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
