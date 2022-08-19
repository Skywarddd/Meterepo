import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnfantFormsComponent } from './components/enfant-forms/enfant-forms.component';
import { ParentsFormsComponent } from './components/parents-forms/parents-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    EnfantFormsComponent,
    ParentsFormsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
