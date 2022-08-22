import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnfantFormsComponent } from './components/form-city-dropdown/form-city-dropdown.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MeteoHomeComponent } from './components/meteo-home/meteo-home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DisplayMeteoComponent } from './components/display-meteo/display-meteo.component';
import { CommonComponent } from './components/common/common.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    EnfantFormsComponent,
    HomepageComponent,
    MeteoHomeComponent,
    NavbarComponent,
    DisplayMeteoComponent,
    CommonComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
