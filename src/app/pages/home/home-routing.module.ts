import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullWidthComponent } from '../../layouts';
import { HomeComponent } from './components';

const fullWidthRoutes = [
  {
    path: '',
    component: HomeComponent
  }
];

const routes: Routes = [
  {
    path: '',
    component: FullWidthComponent,
    children: fullWidthRoutes
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
