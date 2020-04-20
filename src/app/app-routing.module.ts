import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { WorldStatisticsComponent } from './world-statistics/world-statistics.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: 'countries', component: CountriesComponent },
  { path: 'world-stat', component: WorldStatisticsComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/countries', pathMatch: 'full' }

];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
