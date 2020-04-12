import { Component, OnInit } from "@angular/core";
import { CountriesService } from "../services/countries.service";
import { NgxSpinnerService } from "ngx-spinner";
import {} from "googlemaps";
import worldmapConfig from "../../assets/world-map.json";
import { NotificationService } from "../services/notification.service";

@Component({
  selector: "app-countries",
  templateUrl: "./countries.component.html",
  styleUrls: ["./countries.component.css"],
})
export class CountriesComponent implements OnInit {
  data: any;
  title = (<any>worldmapConfig).title;
  type = (<any>worldmapConfig).type;
  columnNames = (<any>worldmapConfig).columnNames;
  options = {};
  width = (<any>worldmapConfig).width;
  height = (<any>worldmapConfig).height;

  constructor(
    private countriesService: CountriesService,
    private spinner: NgxSpinnerService,
    private notification: NotificationService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    this.getCountryDetailsForMap();
  }
  getCountryDetailsForMap() {
    this.countriesService.getCountriesForMap().subscribe(
      (countries: any) => {
        let mapData = [];
        let countriesMap: Map<String, { c: Number; d: Number }> = new Map<
          String,
          { c: Number; d: Number }
        >();
        countries.data.covid19Stats.forEach((element) => {
          if (countriesMap.has(element.country)) {
            const x = countriesMap.get(element.country);
            countriesMap.set(element.country, {
              c: x.c + element.confirmed,
              d: x.d + element.deaths,
            });
          } else {
            countriesMap.set(element.country, {
              c: element.confirmed,
              d: element.deaths,
            });
          }
        });
        countriesMap.forEach((v, k) => {
          let arr = [];
          arr.push(k);
          arr.push(v.c);
          arr.push(v.d);
          //console.log(arr);
          mapData.push(arr);
        });
        //console.log(mapData);
        this.data = mapData;
        this.spinner.hide();
        this.notification.showSuccess("Data Loaded Successfully!");
        return this.data;
      },
      (error) => {
        this.notification.showError(error);
        //console.log(error);
      }
    );
  }

  /* data = [
    ["UK", 200, 124],
    ["India", 300, 545],
    ["Brazil", 1400, 56],
    ["Canada", 500, 874],
    ["France", 1600, 541],
    ["RU", 700, 21],
    ["Sri Lanka", 800, 0],
    ["India", 15800, 55],
    ["Australia", 12554, 12],
  ];  */
}
