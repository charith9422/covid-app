import { Component, OnInit } from "@angular/core";
import { CountriesService } from "../services/countries.service";
import { MapCountry } from "../models/map-country";
import { DataResponse } from '../models/data-response';

@Component({
  selector: "app-head",
  templateUrl: "./head.component.html",
  styleUrls: ["./head.component.css"],
})
export class HeadComponent implements OnInit {
  countries: DataResponse;
  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.getDetails();
  }

  getDetails() {
    this.countriesService.getSriLankaDetails().subscribe((data) => {
      this.countries = data;
      //console.log(data);
    });
  }
}
