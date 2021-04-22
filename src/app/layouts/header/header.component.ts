import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { map } from 'rxjs/operators';
import { WeatherService } from 'src/app/core/services';
import { Weather } from 'src/app/data-layer/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faGithub: any;

  weatherInfo$ = this.weatherService.weatherInfo$.pipe(
    map((data: Weather) => data)
  );

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.faGithub = faGithub;
     navigator.permissions.query({ name: 'geolocation' }).then((permissionStatus) => {
       if (permissionStatus.state === 'granted') {
         this.requestLocation();
       } else {
         permissionStatus.onchange = () => {
           if (permissionStatus.state === 'granted') {
             this.requestLocation();
           }
         };
       }
     });
  }

  requestLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { longitude, latitude } = position.coords;

          this.weatherService.updateLocation(latitude, longitude)
        },
        err => console.log('Error while retreiving location: ', err));
    } else {
      console.error('Error: location not supported');
    }
  }
}
