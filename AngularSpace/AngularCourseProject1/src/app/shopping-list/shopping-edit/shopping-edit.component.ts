import { Component, ElementRef, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  ingredient: Ingredient; 
  @ViewChild('amountInput,{static:false}') amountInputReference : ElementRef ; 

  constructor(private shoppingService:ShoppingListService) { }

  ngOnInit(): void {
  }

  addNewIngredient(event, nameInput:HTMLInputElement){
    event.preventDefault(); 
    let newIngrediente = new Ingredient(nameInput.value, +this.amountInputReference.nativeElement.value);
    this.shoppingService.addNewIngredient(newIngrediente);  
  }
}
