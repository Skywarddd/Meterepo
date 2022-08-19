import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  tabs: any[] = ["Home", "Météo en direct", "Météo passée"]
  constructor() { }

  ngOnInit(): void {
  }

}
