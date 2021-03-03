import { Component } from '@angular/core';
import { CountriesService } from './core/services/countries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public countries;
  constructor(private countriesService: CountriesService) {
    countriesService
      .getAllContries()
      .subscribe((countries) => {this.countries = countries
      console.log(this.countries);
      });
  }
}
