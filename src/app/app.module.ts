import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DisplayMeteoComponent } from './components/display-meteo/display-meteo.component';
import { CommonComponent } from './components/common/common.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DisplayMeteoComponent,
    CommonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
