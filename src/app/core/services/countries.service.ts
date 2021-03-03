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

  getAllContries(): void {
    this.http
      .get(this.API)
      .pipe(map((response: []) => this.orderByRegion(response)));
  }

  private orderByRegion(listContries: []): Object {
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
    return {
      asia: this.asia,
      africa: this.africa,
      americas: this.americas,
      europe: this.europe,
      oceania: this.oceania,
    };
  }
}
