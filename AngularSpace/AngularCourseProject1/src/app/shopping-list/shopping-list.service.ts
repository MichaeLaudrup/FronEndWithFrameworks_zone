import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";
export class ShoppingListService{
    eventNewIngredientAdded = new Subject<Ingredient[]>(); 
    private ingredients:Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
        new Ingredient('Orange', 3)];
        
    addNewIngredient(newIngredient:Ingredient){
        console.log(newIngredient)
        this.ingredients.push(newIngredient); 
        this.eventNewIngredientAdded.next(this.ingredients.slice()); 
    }
    getIngredients(){
        return this.ingredients.slice(); 
    }

    addNewIngredients(newIngredients:Ingredient[]){
        this.ingredients = this.ingredients.concat(newIngredients); 
        this.eventNewIngredientAdded.next(this.ingredients.slice()); 
    }
}