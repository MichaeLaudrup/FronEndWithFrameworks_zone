import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularCourseProject1';
  loadedFeature = 'recipe'; 

  onNavigate( data:string){
    this.loadedFeature = data; 
  }
}
