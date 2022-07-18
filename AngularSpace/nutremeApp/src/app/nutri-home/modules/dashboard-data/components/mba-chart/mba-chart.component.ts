import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts'; 
import { NutritionTarget } from 'src/app/shared/enums/nutrition-target.enum';
@Component({
  selector: 'app-mba-chart',
  templateUrl: './mba-chart.component.html',
  styleUrls: ['./mba-chart.component.scss']
})
export class MbaChartComponent implements OnInit {
  @Input('mba') mba: number = 0; 
  @Input('mba-with-activity') mbaWithActivity: number = 0; 
  @Input('mba-with-act-objetive') mbaWithActAndObjetive: number = 0; 
  @Input('objetive') objetive : NutritionTarget; 
  Highcharts = Highcharts; 
  chartOptions: any; 
  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
          type: 'column',
          backgroundColor: 'transparent',
      },
      title: {
          align: 'left',
          text: ''
      },
      subtitle: {
          align: 'left',
          text: ''
      },
      accessibility: {
          announceNewData: {
              enabled: true
          }
      },
      xAxis: {
          type: 'category',
          labels: {
            style: {
              color:'var(--text-generic-color)'
            }
          },
          lineColor: 'var(--text-generic-color)'
      },
      yAxis: {
          title: {
              text: 'Total KCal Díarias',
              style: {
                color:'var(--text-generic-color)'
              }
          },
          labels: {
            style: {
              color:'var(--text-generic-color)'
            }
          }
  
      },
      legend: {
          enabled: false,
      },
      plotOptions: {
          series: {
              borderWidth: 0,
              dataLabels: {
                  enabled: true,
                  format: `<span style="color: var(--text-generic-color); font-size:.75rem;">{point.y:.1f} <span> Kcal/día`,
                  style: {
                    textShadow: false,
                    textOutline: false,
                  }
              }
          },
         
      },
  
      tooltip: {
          headerFormat: '',
          pointFormat: '<span style="color:black">{point.name}</span>: <br><b>{point.y:.2f} Kcal/día</b><br/>'
      },
  
      series: [
          {
              name: "Kcal/día",
              colorByPoint: true,
              data: [
                  {
                      name: "MBA",
                      y:this.mba,
                      color: 'var(--chart-color01)'
                  },
                  {
                      name: "MBA haciendo deporte",
                      y: this.mbaWithActivity,
                      color: 'var(--chart-color02)'
                  },
                  {
                      name: `MBA ${this.objetive}`,
                      y: this.mbaWithActAndObjetive,
                      color: 'var(--chart-color03)'
                  }
              ]
          }
      ],
  }

  }

}
