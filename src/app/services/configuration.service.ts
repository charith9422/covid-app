import { Injectable } from "@angular/core";
import headers from "../../assets/configuration.json";
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ConfigurationService {
  constructor() {}

  httpOptions = {
    headers: new HttpHeaders({
      "x-rapidapi-key": (<any>headers).xRapidapiKey
    })
  };
}
