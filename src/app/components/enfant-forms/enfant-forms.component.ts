import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-enfant-forms',
  templateUrl: './enfant-forms.component.html',
  styleUrls: ['./enfant-forms.component.css']
})
export class EnfantFormsComponent implements OnInit {

  @Output()
  addCity: EventEmitter<any> = new EventEmitter();

  city : FormGroup  = this.formBuilder.group({
    name: ['',Validators.required]    
  })

  submitted: Boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    this.submitted = true;
    if (this.city.valid) {
      // Si le formulaire est valide, on envoie l'objet à l'écouteur
      console.log("je vais emettre un evement si formulaire city est valide")
      this.addCity.emit(this.city.value);
      // puis on appelle notre methode pour reset
      this.resetForm();
    } else {
      console.log('Formulaire ville invalide');
    }
  }

  private resetForm(): void {
    // On réinitialise le formulaire
    this.city.reset();
    this.submitted = false;
    console.log("je suis en train de reset de formulaire city")
  }

  get form() {
    return this.city.controls
  }

}
