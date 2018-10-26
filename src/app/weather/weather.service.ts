import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise'

@Injectable()

export class WeatherService {
    constructor(private http: Http) {}
    getTemp(cityName: string){
        const url = 'https://api.openweathermap.org/data/2.5/weather?appid=c3cb100f2b75019d51bff9e10f55e85d&units=metric&q=' + cityName;
        return this.http.get(url)
        .toPromise()
        .then(res => res.json())
        .then(resJson => resJson.main.temp);
    }
}