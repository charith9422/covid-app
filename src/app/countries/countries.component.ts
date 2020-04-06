import { Component, OnInit } from "@angular/core";
import { CountriesService } from "../services/countries.service";
import { NgxSpinnerService } from "ngx-spinner";
import { DataResponse } from "../models/data-response";

import {} from "googlemaps";
import worldmapConfig from "../../assets/world-map.json";
import { Worldmap } from "../models/worldmap";

@Component({
  selector: "app-countries",
  templateUrl: "./countries.component.html",
  styleUrls: ["./countries.component.css"],
})
export class CountriesComponent implements OnInit {
  countries: DataResponse;
  data: Worldmap;
  title = (<any>worldmapConfig).title;
  type = (<any>worldmapConfig).type;
  columnNames = (<any>worldmapConfig).columnNames;
  options = {};
  width = 1000;
  height = 500;

  constructor(
    private countriesService: CountriesService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    this.getCountryDetails();
  }

  getCountryDetails() {
    this.countriesService.getCountries().subscribe((countries) => {
      this.countries = countries;
      this.spinner.hide();
      console.log(countries);
    });
  }

  /* data = [
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
