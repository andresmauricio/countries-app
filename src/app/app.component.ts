import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CountriesService } from './core/services/countries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public countries;
  public filterData;
  select = new FormControl(null);
  constructor(private countriesService: CountriesService) {
    countriesService.getAllContries().subscribe((countries) => {
      this.filterData = countries;
      this.countries = countries;
      console.log(this.countries);
    });
    this.select.valueChanges.subscribe(() => {
      this.countries.map((region) => {
        if (this.select.value === 'Show All') this.filterData = this.countries;
        if (region.name === this.select.value) {
          const filter = this.countries.find(
            (r) => r.name === this.select.value
          );
          this.filterData = [filter];
        }
      });
    });
  }
}
