import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components';
import { SimpleListModule } from '../../components/simple-list/simple-list.module';
import { DataLayerModule } from 'src/app/data-layer/data-layer.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SimpleListModule,
    DataLayerModule
  ]
})
export class HomeModule {
}
