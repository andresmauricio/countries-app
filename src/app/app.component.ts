import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { delay } from 'rxjs/operators';
import { Regions } from './core/constans/constans';
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
  input = new FormControl(null);
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
    this.input.valueChanges.pipe(delay(300)).subscribe(() => {
      const countrie = this.input.value;
      let result = [];
      for (const r of this.countries) {
        for (const c of r.data) {
          if (c.name.toLowerCase().includes(countrie.toLowerCase())) {
            result.push(c);
          }
        }
      }
      let africa = [];
      let americas = [];
      let asia = [];
      let europe = [];
      let oceania = [];
      result.forEach((countrie) => {
        if (countrie['region'] === Regions.AFRICA) {
          africa.push(countrie);
        } else if (countrie['region'] === Regions.AMERICAS) {
          americas.push(countrie);
        } else if (countrie['region'] === Regions.ASIA) {
          asia.push(countrie);
        } else if (countrie['region'] === Regions.EUROPE) {
          europe.push(countrie);
        } else if (countrie['region'] === Regions.OCEANIA) {
          oceania.push(countrie);
        }
      });
      this.filterData = 
       [
        { data: asia, name: Regions.ASIA },
        { data: africa, name: Regions.AFRICA },
        { data: americas, name: Regions.AMERICAS },
        { data: europe, name: Regions.EUROPE },
        { data: oceania, name: Regions.OCEANIA },
      ];
    });
  }
}
