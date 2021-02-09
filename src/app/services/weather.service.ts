import { Injectable } from '@angular/core';
// para poder pedir peticiones get/post/...
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  URI: string = '';
  constructor(private httpClient: HttpClient) {

    this.URI = `${environment.API_URL}appid=${environment.apiKey}&units=metric&q=`;
    //this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=257a60a60107ab69e222025ddecee0f5&units=metric&q=`;
  }


  getWeather(cityName: string) {
    return this.httpClient.get(`${this.URI}${cityName}`);
  }

}
