import { BrowserModule } from "@angular/platform-browser";
import { NgModule, APP_INITIALIZER } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material/material.module";
import { AppRoutingModule } from "./app-routing.module";
import { CountriesComponent } from "./countries/countries.component";
import { NavbarComponent } from "./layout/navbar/navbar.component";
import { WorldMapComponent } from "./layout/world-map/world-map.component";
import { GoogleChartsModule } from "angular-google-charts";
import { InitialService } from "./services/initial.service";
import { ConfigurationService } from "./services/configuration.service";
import { HttpClientModule } from "@angular/common/http";
import { NgxSpinnerModule } from "ngx-spinner";
import { HeadComponent } from "./head/head.component";
import { ToastrModule } from "ngx-toastr";

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    NavbarComponent,
    WorldMapComponent,
    HeadComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    NgxSpinnerModule,
    GoogleChartsModule.forRoot(""),
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: "toast-top-right",
      preventDuplicates: true,
    }),
  ],
  providers: [
    InitialService,
    {
      provide: APP_INITIALIZER,
      useFactory: ConfigLoader,
      deps: [InitialService],
      multi: true,
    },
    ConfigurationService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
export function ConfigLoader(configService: InitialService) {
  return () => configService.load("../assets/configuration.json");
}
