import { Component, Input, OnInit } from '@angular/core';
import { NutritionTarget } from 'src/app/shared/enums/nutrition-target.enum';

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
      labels: ['MBA en reposo', 'MBA con deporte', 'MBA con objetivo'],
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
          },
      ],
      
    }

    this.options = {
      plugins: {
        legend: false,
      },
      indexAxis: 'y',
      tooltips: {
        callbacks: {
           label: function(tooltipItem) {
                  return tooltipItem.yLabel;
           }
        }
      }
    }
  } 

  update(event: Event) {
    
  }

}
