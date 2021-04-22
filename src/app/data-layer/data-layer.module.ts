import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { WeatherManager } from './entity-managers';
import { WeatherService } from './services';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
})
export class DataLayerModule {
  static forRoot(): ModuleWithProviders<DataLayerModule> {
    return {
      ngModule: DataLayerModule,
      providers: [
        WeatherManager,
        WeatherService
      ],
    };
  }
}
