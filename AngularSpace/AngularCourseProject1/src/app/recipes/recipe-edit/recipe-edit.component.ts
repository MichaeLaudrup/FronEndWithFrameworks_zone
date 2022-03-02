import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id:number;
  editMode:boolean = false;
  editRecipeForm: FormGroup;   
  constructor(private rutaActual:ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.rutaActual.params.subscribe( (params:Params) => {
      if(params['id']){
        this.id = +params['id']; 
        this.editMode = true; 
      }else{
        this.editMode = false; 
      }
      this.initForm(); 
    })

    
  }


  initForm(){
    const recipe=  this.recipeService.getRecipeByID(this.id); 
    let recipeName :string, recipeImgPath:string, recipeDescription:string; 
    let recipeIngredients = new FormArray([]); 
    if(this.editMode){
      recipeName = recipe.name; 
      recipeImgPath = recipe.imagePath; 
      recipeDescription = recipe.description; 
      if(recipe['ingredients']){
        for(let ingredient of recipe.ingredients){
          recipeIngredients.push(new FormGroup({
            'name': new FormControl(ingredient.name, Validators.required),
           'amount': new FormControl(ingredient.amount , [Validators.required, Validators.pattern(/[1-9][1-9]*$/)])
          })); 
        }
      }
    }

    this.editRecipeForm = new FormGroup({
      'name':  new FormControl(recipeName, Validators.required),
      'imagepath': new FormControl(recipeImgPath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients
    });
    console.log(this.editRecipeForm.value)
  }

  submit(){
    console.log(this.editRecipeForm.value)
  }

  get controls(){
    return (<FormArray>this.editRecipeForm.get('ingredients')).controls; 
  }

  addIngredient(){
    (<FormArray>this.editRecipeForm.get('ingredients')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null , [Validators.required, Validators.pattern(/[1-9][1-9]*$/)])}))
  }
}
