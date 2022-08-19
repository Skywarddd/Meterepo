import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  description: string = "Ceci est un site pour afficher la météo et d'autres infos"
  imageUrl: string = "https://www.wallpaperup.com/uploads/wallpapers/2014/01/07/218925/b87131f708e729026c39a2883bcfdde9.jpg"

  constructor() { }

  ngOnInit(): void {
  }

}
