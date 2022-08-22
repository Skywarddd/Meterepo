import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meteo-home',
  templateUrl: './meteo-home.component.html',
  styleUrls: ['./meteo-home.component.css']
})
export class MeteoHomeComponent implements OnInit {

  meteoHomeTitle: string = "Météo à Paris"
  constructor() { }

  ngOnInit(): void {
  }

}
