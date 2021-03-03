import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Regions } from '../constans/constans';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private readonly API: string;
  private africa = [];
  private americas = [];
  private asia = [];
  private europe = [];
  private oceania = [];

  constructor(private http: HttpClient) {
    this.API = environment.api;
  }

  getAllContries() {
    return this.http
      .get(this.API)
      .pipe(map((response: []) => this.orderByRegion(response)));
  }

  private orderByRegion(listContries: []) {
    listContries.forEach((countrie) => {
      if (countrie['region'] === Regions.AFRICA) {
        this.africa.push(countrie);
      } else if (countrie['region'] === Regions.AMERICAS) {
        this.americas.push(countrie);
      } else if (countrie['region'] === Regions.ASIA) {
        this.asia.push(countrie);
      } else if (countrie['region'] === Regions.EUROPE) {
        this.europe.push(countrie);
      } else if (countrie['region'] === Regions.OCEANIA) {
        this.oceania.push(countrie);
      }
    });
    return [
      { data: this.asia, name: Regions.ASIA },
      { data: this.africa, name: Regions.AFRICA },
      { data: this.americas, name: Regions.AMERICAS },
      { data: this.europe, name: Regions.EUROPE },
      { data: this.oceania, name: Regions.OCEANIA },
    ];
  }
}
