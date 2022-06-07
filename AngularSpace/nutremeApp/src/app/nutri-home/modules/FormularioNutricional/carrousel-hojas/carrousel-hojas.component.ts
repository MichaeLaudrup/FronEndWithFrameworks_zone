import { Component, OnDestroy, OnInit } from '@angular/core';
import {  ActivatedRoute, ChildrenOutletContexts, NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { slideInAnimation, sliderSmoothly } from 'src/app/app.animations';
@Component({
  selector: 'app-carrousel-hojas',
  templateUrl: './carrousel-hojas.component.html',
  styleUrls: ['./carrousel-hojas.component.scss'],
  animations: [sliderSmoothly]
})
export class CarrouselHojasComponent implements OnInit, OnDestroy {
  relativeRoutes: string[] = ['objetivo', 'MBA_IMC' ]
  actualPosition: number = 0; 
  nextRoute: string = ''; 
  previousRoute: string = ''; 

  $events: Subscription[] = []; 
  constructor(private contexts:ChildrenOutletContexts, private router: Router) { 
       this.$events.push(this.router.events.subscribe( ( event) => {
         if(event instanceof NavigationEnd){
            this.updateRoutes(); 
         }
       })); 

     }

  ngOnInit(): void {
    this.updateRoutes(); 
  }

  ngOnDestroy(): void {
    this.$events.forEach( event => event.unsubscribe())
  }




  updateRoutes() {
    let actualRouteString = this.router.url; 
    let endPathChildren = actualRouteString.substring(actualRouteString.lastIndexOf('/')+1);
    this.actualPosition = this.relativeRoutes.findIndex( (path: string) => endPathChildren === path); 
    if(this.actualPosition < this.relativeRoutes.length){
      this.nextRoute = this.relativeRoutes[this.actualPosition+1]; 
    }
    if(this.actualPosition > 0){
      this.previousRoute = this.relativeRoutes[this.actualPosition-1]; 
    }
    
  }

  prepareRoute(outlet: RouterOutlet){
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['name']; 
  }



}
