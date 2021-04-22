import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { WeatherService } from '../services';
import { Weather } from '../models';
import { Utils } from '../core';


@Injectable()
export class WeatherManager {
  constructor(private weatherService: WeatherService) { }

  getWeather(latitude: number, longitude: number): Observable<Weather> {
    return this.weatherService.getWeather({ latitude, longitude })
      .pipe(
        map((res) => {
          let result: Weather;
          result = Utils.recurResToProp(res)

          return result;
        })
      );
  }
}
