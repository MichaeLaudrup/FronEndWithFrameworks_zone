import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id:number;
  editMode:boolean = false;  
  constructor(private rutaActual:ActivatedRoute) { }

  ngOnInit(): void {
    this.rutaActual.params.subscribe( (params:Params) => {
      if(params['id']){
        this.id = +params['id']; 
      }else{
        this.editMode = true; 
      }
    })
  }

}
