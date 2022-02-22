import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.module';
import { RecipeService } from '../recipes.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]; 

  
  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes(); 
  }

  itemSelected(event){
    console.log(event.currentTarget.dataset.index)
    const recipe = this.recipeService.recipes[event.currentTarget.dataset.index]; 
    this.recipeService.recipeSelected.emit(recipe); 
  }

}
