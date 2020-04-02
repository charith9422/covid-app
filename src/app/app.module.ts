import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { CountriesComponent } from './countries/countries.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { WorldMapComponent } from './layout/world-map/world-map.component';
import { GoogleChartsModule } from 'angular-google-charts';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    NavbarComponent,
    WorldMapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    GoogleChartsModule.forRoot(''),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
