import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parents-forms',
  templateUrl: './parents-forms.component.html',
  styleUrls: ['./parents-forms.component.css']
})
export class ParentsFormsComponent implements OnInit {

  cities : any[] = [{nom:"Londres"}]

  constructor() { }

  ngOnInit(): void {
  }

  showCity(city:any){
    this.cities.push(city);
  }

}
