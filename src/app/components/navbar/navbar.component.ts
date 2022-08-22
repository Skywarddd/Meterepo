import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  tabs: any[] = [
    {
      "id": 1,
      "name": "Home",
      "url": "home"
    },
    {
      "id": 2,
      "name": "Météo en direct",
      "url": "direct"
    },
    {
      "id": 3,
      "name": "Météo passée",
      "url": "archives"
    } 
]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirectTo(url: string) {
    this.router.navigate(['/', url]);
  }

}
