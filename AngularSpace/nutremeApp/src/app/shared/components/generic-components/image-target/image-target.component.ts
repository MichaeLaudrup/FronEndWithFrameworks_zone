import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'image-target',
  templateUrl: './image-target.component.html',
  styleUrls: ['./image-target.component.scss']
})
export class ImageTargetComponent implements OnInit {
  @Input() title = "Desayuno"; 
  @Input() imgSrc = 'assets/store-imgs/breakFast.jpg'; 
  constructor() { }

  ngOnInit(): void {
  }

}
