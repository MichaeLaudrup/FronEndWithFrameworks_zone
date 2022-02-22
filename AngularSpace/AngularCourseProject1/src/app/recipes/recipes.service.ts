import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.module";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>(); 
    recipes: Recipe[] = [
        new Recipe("Pecado Carnal Mediterraneo", "Probar un vocado de este alimento puede ser un pecado, su salsa de champiñones, verduras sofreidas a fuego lento hacen que sea una tentación", "https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_1280.jpg" ),
        new Recipe("Pizza de los 4 vientos", "Esta pizza tiene una mezcla de sabores de los vientos procedentes de Asia, Europa, Africa y Rusia.", "https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_1280.jpg" )
      ];
    
    getRecipes(){
        return this.recipes.slice(); //Devuelve array por copia y no por referencia de objeto
    }
}