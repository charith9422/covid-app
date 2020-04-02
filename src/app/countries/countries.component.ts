import { Component, OnInit } from '@angular/core';
import { ICountriesResponse } from '../models/countriesResponse';
import { CountriesService } from '../services/countries.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  countries:ICountriesResponse;
  constructor(private countriesService:CountriesService,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.getCountryDetails();
  }

  getCountryDetails(){
    this.countriesService.getCountries().subscribe(countries=>{
      this.countries = countries;
      this.spinner.hide();
      console.log(countries)
    });
  }

}
