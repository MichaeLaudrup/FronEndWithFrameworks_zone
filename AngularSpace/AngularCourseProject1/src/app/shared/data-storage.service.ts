import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { exhaustMap, map, take } from "rxjs/operators";
import { AuthService } from "../auth/auth.service";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipes.service";

@Injectable({providedIn:'root'}) export class DataStorageService {
    constructor(private httpClient: HttpClient, private servicioRecetas: RecipeService, private servicioAuth: AuthService){

    }

    storeRecipes(){
        
        const recipes = this.servicioRecetas.getRecipes(); 

        this.httpClient.put('https://ng-course-recipe-book-b365d-default-rtdb.europe-west1.firebasedatabase.app/recipes.json', recipes).subscribe( (response)=> {
            console.log(response); 
        } ); 
    }

    fetchRecipes(){
        return this.httpClient.get<Recipe[]>('https://ng-course-recipe-book-b365d-default-rtdb.europe-west1.firebasedatabase.app/recipes.json').
            pipe(
            map( recipes => {
                return recipes.map(recipe => {return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []}})
        })); 
    }

}