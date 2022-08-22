import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {

  title: string = "MeteRepo"
  subtitle: string = "Le répo météo qu'il vous faut !"
  
  constructor() { }

  ngOnInit(): void {
  }

}
