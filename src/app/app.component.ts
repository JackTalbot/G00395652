import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  private res;

  constructor(
              private weatherAPI: WeatherService
  ) {}
  ngOnInit(){
    this.getWeatherData();
  }

  getWeatherData() {
    this.weatherAPI.getWeatherData().subscribe((response) =>{
    this.res = response;
    console.log(this.res);
    });
  }

}