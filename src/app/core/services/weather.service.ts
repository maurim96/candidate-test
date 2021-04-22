import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, timer } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { WeatherManager } from 'src/app/data-layer/entity-managers';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private readonly _weatherInfo$ = new BehaviorSubject<{latitude: number, longitude: number}>(null);
  private _weatherInfoFiltered$ = this._weatherInfo$.pipe(filter((location) => !!location));
  private _timerInterval$ = timer(0, 30000);

  weatherInfo$ = combineLatest([this._weatherInfoFiltered$, this._timerInterval$]).pipe(
    switchMap(([{latitude, longitude}, _]) => this.weatherManager.getWeather(latitude, longitude))
  )

  updateLocation(latitude, longitude): void {
    this._weatherInfo$.next({latitude, longitude});
  }

  constructor(private weatherManager: WeatherManager) { }
}
