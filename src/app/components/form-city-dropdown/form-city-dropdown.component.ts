import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-form-city-dropdown',
  templateUrl: './form-city-dropdown.component.html',
  styleUrls: ['./form-city-dropdown.component.css'],
})
export class EnfantFormsComponent {
  isSubmitted = false;
  City: any = ['Vessoul', 'Arnac-la-Poste', 'Bellecombe', 'Caen'];
  constructor(public fb: FormBuilder) {}
  registrationForm = this.fb.group({
    cityName: ['', [Validators.required]],
  });
  changeCity(e: any) {
    this.cityName?.setValue(e.target.value, {
      onlySelf: true,
    });
  }



  
  // Access formcontrols getter
  get cityName() {
    return this.registrationForm.get('cityName');
  }
  onSubmit(): void {
    console.log(this.registrationForm);
    this.isSubmitted = true;
    if (!this.registrationForm.valid) {
      false;
    } else {      
      console.log(JSON.stringify(this.registrationForm.value));
    }
  }
}