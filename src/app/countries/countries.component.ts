import { Component, OnInit } from '@angular/core';
import { ICountriesResponse } from '../models/countriesResponse';
import { CountriesService } from '../services/countries.service';
@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  countries:ICountriesResponse;
  constructor(private countriesService:CountriesService) { }

  ngOnInit(): void {
    this.getCountryDetails();
  }

  getCountryDetails(){
    this.countriesService.getCountries().subscribe(countries=>{
      this.countries = countries;
      console.log(countries)
    });
  }

}
