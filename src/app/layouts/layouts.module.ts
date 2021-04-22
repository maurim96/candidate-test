import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FullWidthComponent } from './full-width/full-width.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DataLayerModule } from '../data-layer/data-layer.module';


@NgModule({
  declarations: [
    FullWidthComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    DataLayerModule
  ],
  exports: [
    FullWidthComponent,
    HeaderComponent,
    FooterComponent,
  ]
})
export class LayoutsModule {
}
