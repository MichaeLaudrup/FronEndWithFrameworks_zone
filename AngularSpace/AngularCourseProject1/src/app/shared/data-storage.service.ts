import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipes.service";

@Injectable({providedIn:'root'}) export class DataStorageService {
    constructor(private httpClient: HttpClient, private servicioRecetas: RecipeService){

    }

    storeRecipes(){
        const recipes = this.servicioRecetas.getRecipes(); 
        this.httpClient.put('https://ng-course-recipe-book-b365d-default-rtdb.europe-west1.firebasedatabase.app/recipes.json', recipes).subscribe( (response)=> {
            console.log(response); 
        } ); 
    }

    fetchRecipes(){
        this.httpClient.get<Recipe[]>('https://ng-course-recipe-book-b365d-default-rtdb.europe-west1.firebasedatabase.app/recipes.json').subscribe( (response) => {
            this.servicioRecetas.updateRecipeListView.next(response);  
        })
    }

}