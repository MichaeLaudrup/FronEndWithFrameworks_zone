import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { NutritionTarget } from 'src/app/shared/enums/nutrition-target.enum';


Chart.defaults.elements.bar.borderWidth = 2;
@Component({
  selector: 'app-mba-box',
  templateUrl: './mba-box.component.html',
  styleUrls: ['./mba-box.component.scss']
})
export class MbaBoxComponent implements OnInit {
  @Input('mba') mba: number = 0; 
  @Input('mba-with-activity') mbaWithActivity: number = 0; 
  @Input('mba-with-act-objetive') mbaWithActAndObjetive: number = 0; 
  @Input('objetive') objetive : NutritionTarget; 
  data: any;
  options: any; 
  constructor() {
  }

  ngOnInit(): void {
    this.data = {
      labels: ['En reposo', 'Haciendo deporte', `Para ` + this.objetive],
      datasets: [
          {
              grouped: true,
              data: [this.mba, this.mbaWithActivity, this.mbaWithActAndObjetive],
              backgroundColor: [
                '#c3fae8',
                '#96f2d7',
                '#63e6be',
                '#38d9a9',
              ],
              color: ['white']
          },
      ],
      
    }

    this.options = {
     
      plugins: {
        legend: false
      },
      indexAxis: 'y',
      scales: {
        x: {
            ticks: {
                color: '#99e9f2'
            },
            grid: {
                color: '#99e9f266'
            }
        },
        y: {
            ticks: {
                color: '#99e9f2'
            },
            grid: {
                color: 'transparent'
            },
        }
    }
    }
  } 

  update(event: Event) {
    
  }

}
