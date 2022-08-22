import { Component, OnInit } from '@angular/core';
import { Meteo } from 'src/app/models/meteo.model';
import { MeteoService } from 'src/app/services/meteo.service';

@Component({
  selector: 'app-meteo-infos',
  templateUrl: './meteo-infos.component.html',
  styleUrls: ['./meteo-infos.component.css']
})
export class MeteoInfosComponent implements OnInit {

  meteoInfos: Meteo[] = [];

  constructor(private meteoService: MeteoService) { }

  ngOnInit(): void {
    this.meteoService
    .getMeteo()
    .subscribe((meteoInfo) => {this.meteoInfos = meteoInfo})
  }

}
