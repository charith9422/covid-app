import { Component, OnInit } from "@angular/core";
import { CountriesService } from "../services/countries.service";
import { NgxSpinnerService } from "ngx-spinner";
import { DataResponse } from "../models/data-response";

import {} from "googlemaps";
import worldmapConfig from "../../assets/world-map.json";
import { Worldmap } from "../models/worldmap";
import { Country } from "../models/country";
import { MapCountry } from "../models/map-country";

@Component({
  selector: "app-countries",
  templateUrl: "./countries.component.html",
  styleUrls: ["./countries.component.css"],
})
export class CountriesComponent implements OnInit {
  //countries: DataResponse;
  data: MapCountry[] = [];
  title = (<any>worldmapConfig).title;
  type = (<any>worldmapConfig).type;
  columnNames = (<any>worldmapConfig).columnNames;
  options = {};
  width = (<any>worldmapConfig).width;
  height = (<any>worldmapConfig).height;

  constructor(
    private countriesService: CountriesService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    this.getCountryDetailsForMap();
  }

  /* getCountryDetails() {
    this.countriesService.getCountries().subscribe(
      (countries) => {
        this.countries = countries;
        //this.data = ;
        this.spinner.hide();
        console.log(countries);
      },
      (error) => {
        console.log(error);
      }
    );
  } */
  getCountryDetailsForMap() {
    this.countriesService.getCountriesForMap().subscribe(
      (countries) => {
        this.data = countries;
        //debugger
        //this.data = ;
        this.spinner.hide();
        console.log(this.data);
        return this.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  /*  data = [
    ["Germany", 200, 124],
    ["United States", 300, 545],
    ["Brazil", 1400, 56],
    ["Canada", 500, 874],
    ["France", 1600, 541],
    ["RU", 700, 21],
    ["Sri Lanka", 800, 0],
    ["India", 15800, 55],
    ["Australia", 12554, 12],
  ]; */
}
