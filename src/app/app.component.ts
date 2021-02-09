import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // creaamos propiedad, almacenamos en el estado de la aplicación temporalmente
  // al inicio indefinido, la cargaremos como respuesta 
  // weather = undefined;
  weather;
  weatherError;
  alert;
  cityName = "colombo";


  constructor(private weatherService: WeatherService) {
  }


  ngOnInit() {
    this.weatherService.getWeather(this.cityName)
      .subscribe(res => { this.weather = res })
  }

  getWeather(cityName: string) {
    this.weatherService.getWeather(cityName)
      .subscribe(
        res => {
          console.log(res);
          this.weather = res;
          this.weatherError = '';
        },
        err => {
          console.log(err);
          // this.weatherError = err.statusText;
          this.weatherError = cityName + ' ' + err.error.message;
          this.weather = '';
        }
      );

  }


  submitLocation(cityName: HTMLInputElement) {
    // pequeña validación
    if (cityName.value) {

      this.getWeather(cityName.value);
      console.log(cityName.value);
      // reinicio form
      cityName.value = '';


    } else {
      this.alert = "Please, insert City";
      // alert('Please, insert City');
    }
    cityName.focus();
    // para que no se reinicie al hacer click en el button
    return false;
  }

  FadeOutLink() {
    setTimeout(() => {
      this.alert = false;
    }, 2000);
  }

}
