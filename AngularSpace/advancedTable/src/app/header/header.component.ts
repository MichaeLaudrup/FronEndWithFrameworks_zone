import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  close:boolean = false; 
  constructor() { }

  ngOnInit(): void {
  }

  conmuteClose(){
    this.close = !this.close; 
  }
}
