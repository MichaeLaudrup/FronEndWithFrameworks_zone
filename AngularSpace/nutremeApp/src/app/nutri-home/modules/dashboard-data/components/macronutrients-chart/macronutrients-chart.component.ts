import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppConfigService, AppConfig } from '../../services/AppConfigurationService';
import * as Highcharts from 'highcharts'
@Component({
  selector: 'app-macronutrients-chart',
  templateUrl: './macronutrients-chart.component.html',
  styleUrls: ['./macronutrients-chart.component.scss']
})
export class MacronutrientsChartComponent implements OnInit {
    @Input('carbo-hydrates') carbohydrates: number = 0; 
    @Input('proteins') proteins: number = 0; 
    @Input('fats') fats: number = 0; 
    
    chartOptions = {}; 
    Highcharts = Highcharts; 
    constructor(private configService: AppConfigService) {}

    ngOnInit() {

        this.chartOptions ={
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
                backgroundColor: 'transparent'
            },
            title: {
                text: ''
            },
            tooltip: {
                pointFormat: 'KCal/día: <b>{point.y} Kcal</b>'
            },
            accessibility: {
                point: {
                    valueSuffix: 'KCal'
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    colors: ['var(--chart-color01)', 'var(--chart-color02)', 'var(--chart-color03)'], 
                    dataLabels: {
                        enabled: false,
                        
                    },
                    showInLegend : true,
                    
                }
            },
            legend: {
                itemStyle: {'color': 'var(--font-color)'},
                floating:true,
                x: 10,
                y: '100%',
                itemDistance: 0,
                padding: 0,
                width: '100%'
                  
            },
            series: [{
                name: 'Share',
                data: [
                    { name: 'Carbohidratos', y: this.carbohydrates},
                    { name: 'Proteínas', y: this.proteins },
                    { name: 'Grasas', y: this.fats },
                ]
            }]
        }; 
        setTimeout( () => {
            window.dispatchEvent( new Event('resize'))
        }, 100)

    }


}


