import { Component, OnInit, ViewChild, Input } from "@angular/core";
import {} from "googlemaps";
import worldmapConfig from '../../../assets/world-map.json';
import { Country } from '../../models/country';

@Component({
  selector: "app-world-map",
  templateUrl: "./world-map.component.html",
  styleUrls: ["./world-map.component.css"]
})
export class WorldMapComponent implements OnInit {
  constructor() {}

  //@Input() country:Country;
  
  ngOnInit(): void {}
  title = (<any>worldmapConfig).title;
  type = (<any>worldmapConfig).type;
  columnNames = (<any>worldmapConfig).columnNames;
  options = {};
  width = 1000;
  height = 500;

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
}
