import { Component, OnInit, ViewChild } from "@angular/core";
import {} from "googlemaps";

@Component({
  selector: "app-world-map",
  templateUrl: "./world-map.component.html",
  styleUrls: ["./world-map.component.css"]
})
export class WorldMapComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  title = "Global Spread - Covid19";
  type = "GeoChart";
  data = [
    ["Germany", 200, 124],
    ["United States", 300, 545],
    ["Brazil", 1400, 56],
    ["Canada", 500, 874],
    ["France", 1600, 541],
    ["RU", 700, 21],
    ["Sri Lanka", 800, 0],
    ["India", 15800, 55],
    ["Australia",12554,12]
  ];
  columnNames = ["Country", "Infected", "Deaths"];
  options = {};
  width = 1000;
  height = 500;
}
