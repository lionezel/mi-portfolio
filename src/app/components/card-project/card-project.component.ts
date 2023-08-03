import { Component } from '@angular/core';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.css']
})
export class CardProjectComponent {

//Ecommerce
  Ecommerce(){
    window.open('https://github.com/lionezel/Mi-Tienda')
  }

  //Películas
  Peliculas(){
    window.open('https://github.com/lionezel/peliculas')
  }

  //Pokemones
  Pokemones(){
    window.open('https://github.com/lionezel/api-de-Pokemon')
  }

  //The Rick and Morty
  The_Rick_and_Morty(){
    window.open('https://github.com/lionezel/Mi-Tienda')
  }

}
