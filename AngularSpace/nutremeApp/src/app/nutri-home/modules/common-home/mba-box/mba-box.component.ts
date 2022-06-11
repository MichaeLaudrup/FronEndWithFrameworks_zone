import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mba-box',
  templateUrl: './mba-box.component.html',
  styleUrls: ['./mba-box.component.scss']
})
export class MbaBoxComponent implements OnInit {
  @Input('mba') mba: number = 0; 
  @Input('mba-with-activity') mbaWithActivity: number = 0; 
  @Input('mba-with-act-objetive') mbaWithActAndObjetive?: number = 0; 

  constructor() { }

  ngOnInit(): void {
  }

}
