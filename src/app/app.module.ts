import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {DragulaModule} from 'ng2-dragula';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutsModule} from './layouts/layouts.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SimpleListModule} from './components/simple-list/simple-list.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DataLayerModule } from './data-layer/data-layer.module';
import { WeatherService } from './core/services';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    LayoutsModule,
    BrowserAnimationsModule,
    DragulaModule.forRoot(),
    FontAwesomeModule,
    DataLayerModule.forRoot(),
    SimpleListModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
