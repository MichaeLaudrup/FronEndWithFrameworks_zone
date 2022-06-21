import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppConfigService, AppConfig } from '../../services/AppConfigurationService';
@Component({
  selector: 'app-macronutrients-chart',
  templateUrl: './macronutrients-chart.component.html',
  styleUrls: ['./macronutrients-chart.component.scss']
})
export class MacronutrientsChartComponent implements OnInit {

    data: any;

    chartOptions: any;

    subscription: Subscription;

    config: AppConfig;

    constructor(private configService: AppConfigService) {}

    ngOnInit() {
        this.data = {
            labels: ['Hidratos','Proteinas','Grasas'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        '#96f2d7',
                        '#63e6be',
                        '#38d9a9'
                    ],
                    hoverBackgroundColor: [
                        '#96f2d7',
                        '#63e6be',
                        '#38d9a9',
                    ]
                }
            ]
        };

        this.config = this.configService.config;
        this.updateChartOptions();
        this.subscription = this.configService.configUpdate$.subscribe(config => {
            this.config = config;
            this.updateChartOptions();
        });
    }

    updateChartOptions() {
        this.chartOptions = this.config && this.config.dark ? this.getDarkTheme() : this.getLightTheme();
    }

    getLightTheme() {
        return {
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            }
        }
    }

    getDarkTheme() {
        return {
            plugins: {
                legend: {
                    labels: {
                        color: '#ebedef'
                    }
                }
            }
        }
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}


