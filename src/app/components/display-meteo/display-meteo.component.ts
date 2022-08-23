import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-meteo',
  templateUrl: './display-meteo.component.html',
  styleUrls: ['./display-meteo.component.css']
})
export class DisplayMeteoComponent implements OnInit {

  

  displayVesoul: boolean = false;
  displayArnac: boolean = false;
  displayBellecombe: boolean = false;
  displayCaen: boolean = false;
  
  

  meteos = [
    {
      'insee': 70550,
      'name' : 'Vesoul',
      'temperature' : 10,
      'ensoleillement': 0,
      'pluviometrie':100 
    },
    {
      'insee': 87003,
      'name' : 'Arnac-la-Poste',
      'temperature' : 15,
      'ensoleillement': 0,
      'pluviometrie':100 
    },
    {
      'insee': 73036,
      'name' : 'Bellecombe',
      'temperature' : 5,
      'ensoleillement': 25,
      'pluviometrie':89
    },
    {
      'insee': 14000,
      'name' : 'Caen',
      'temperature' : 35,
      'ensoleillement': 1,
      'pluviometrie':150
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  modifDisplay(formReception : string): void{    
    console.log('ceci est le formreception' + formReception)
    if(formReception == '{"cityName":"Arnac-la-Poste"}'){
    this.displayArnac = !this.displayArnac;
    this.displayVesoul = false;  
    this.displayBellecombe = false;
    this.displayCaen = false;
    

    }else if(formReception == '{"cityName":"Bellecombe"}'){
      this.displayBellecombe = !this.displayBellecombe  
      this.displayVesoul = false;  
      this.displayArnac = false;
      this.displayCaen = false;  
    }else if(formReception =='{"cityName":"Caen"}'){
      this.displayCaen=!this.displayCaen
      this.displayVesoul = false;  
      this.displayArnac = false;
      this.displayBellecombe = false; 
    }else if(formReception == '{"cityName":"Vesoul"}'){
      this.displayVesoul=!this.displayVesoul
      this.displayCaen = false;  
      this.displayArnac = false;
      this.displayBellecombe = false; 
    }else{
      alert('Choisir une ville enregistrée');
    }
    }

}
