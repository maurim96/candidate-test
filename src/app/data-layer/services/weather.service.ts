import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private httpClient: HttpClient) {}

  getWeather(queryParams: { latitude: number, longitude: number }): Observable<any> {
    return this.httpClient.get<any>(
      `${environment.weatherApiURL}?lat=${queryParams.latitude}&lon=${queryParams.longitude}&appid=${environment.weatherApiKey}&units=imperial`
    );
  }
}
