import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl,{
      params: new HttpParams()
      .set('q',cityName)
      .set('appid',environment.apiKey)
      .set('units',"metric")
    })
  }
}
