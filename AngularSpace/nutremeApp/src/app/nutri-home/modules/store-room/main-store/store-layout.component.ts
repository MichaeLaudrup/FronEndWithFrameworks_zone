import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-layout',
  templateUrl: './store-layout.component.html',
  styleUrls: ['./store-layout.component.scss']
})
export class StoreLayoutComponent implements OnInit {
  titles : string[] = ['Desayuno', 'Mediodía', 'Almuerzo', 'Merienda', 'Cena']; 
  imgsSources: string[] = ['assets/store-imgs/store-breakfast.jpg','assets/store-imgs/store-brunch.jpg', 'assets/store-imgs/store-lunch.jpg', 'assets/store-imgs/store-snack.jpg', 'assets/store-imgs/store-dinner.jpg']; 
  constructor() { }

  ngOnInit(): void {
  }

}
