import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    eventNewIngredientAdded = new EventEmitter<Ingredient[]>(); 
    private ingredients:Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
        new Ingredient('Orange', 3)];
        
    addNewIngredient(newIngredient:Ingredient){
        console.log(newIngredient)
        this.ingredients.push(newIngredient); 
        this.eventNewIngredientAdded.emit(this.ingredients); 
    }
    getIngredients(){
        return this.ingredients.slice(); 
    }
}