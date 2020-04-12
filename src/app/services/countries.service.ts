import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { InitialService } from "./initial.service";
import { Observable, throwError } from "rxjs";
import { catchError, retry, toArray } from "rxjs/operators";
import { ConfigurationService } from "./configuration.service";
import { DataResponse } from "../models/data-response";
import config from "../../assets/configuration.json";

@Injectable({
  providedIn: "root",
})
export class CountriesService {
  constructor(
    private http: HttpClient,
    private initialService: InitialService,
    private configurationService: ConfigurationService
  ) {}

  serverUrl: string = this.initialService.getHost();
  httpOptions = this.configurationService.httpOptions;
  endpoint = (<any>config).endPoints.srilanka;

  /* getCountries(): Observable<DataResponse> {
    return this.http
      .get<DataResponse>(this.serverUrl, this.httpOptions)
      .pipe(retry(3), catchError(this.handleError));
  } */
  getCountriesForMap(): Observable<DataResponse> {
    return this.http
      .get<DataResponse>(this.serverUrl, this.httpOptions)
      .pipe(retry(3), catchError(this.handleError));
  }

  getSriLankaDetails(): Observable<DataResponse> {
    return this.http
      .get<DataResponse>(this.serverUrl + this.endpoint, this.httpOptions)
      .pipe(retry(3), catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error("An error occurred:", error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError("Something bad happened; please try again later.");
  }
}
