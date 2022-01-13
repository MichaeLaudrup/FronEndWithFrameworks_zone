import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.module';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Pecado Carnal", "Probar un vocado de este alimento puede ser un pecado, su salsa de champiñones, verduras sofreidas a fuego lento hacen que sea una tentación", "https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_1280.jpg" ),
    new Recipe("Pizza de los 4 vientos", "Esta pizza tiene una mezcla de sabores de los vientos procedentes de Asia, Europa, Africa y Rusia.", "https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_1280.jpg" )
  ]; 
  constructor() { }

  ngOnInit(): void {
  }

}
