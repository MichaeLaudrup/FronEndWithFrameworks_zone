import { Component, OnInit } from "@angular/core";
import * as HighCharts from 'highcharts'
@Component({
	selector: "app-basic-line-chart",
	templateUrl: "./basic-line-chart.component.html",
	styleUrls: ["./basic-line-chart.component.scss"]
})
export class BasicLineChartComponent implements OnInit {
	chartOptions = { };
	Highcharts = HighCharts;  
	constructor() { }
	ngOnInit(){
		this.chartOptions = {
			chart: {
				backgroundColor: 'var(--elements-background)',
			},
			title: {
				text: ""
			},

			subtitle: {
				text: ""
			},

			yAxis: {
				
				title: {
					text: "Kilo Calorías díarias",
					style: {
						color: '#96f2d7'
					}
				},

				labels: {
					style: {
						color: '#96f2d7'
					}
				}
			},

			xAxis: {
				lineColor: '#96f2d7',
				categories: ['Mon','Thu','Wed','Tue','Fri','Sat','Sun'],
				gridLineWidth: 0,

				labels: {
					formatter: function() {
						return this.value;
					},
					style: {
						color: '#96f2d7'
					}
				},
			},

			legend: {
				align: "center",
				verticalAlign: "bottom",
				x:0,
				y:0,
				itemStyle: {
					color: '#96f2d7'
				}
			},

			plotOptions: {
			},

			series: [{
				name: "Kilo calorías objetivo",
				data: [3097, 3097, 3097, 3097, 3097, 3097, 3097],
				color: `#63e6be`
			}, {
				name: "Kilo calorías consumidas",
				data: [2800, 3200, 2959, 3097, 2500, 3097, 3000],
				color: `#38d9a9`
			}
			],

			responsive: {
				rules: [{
					condition: {
						maxWidth: 2000
					},
					chartOptions: {
						legend: {
							layout: "horizontal",
							align: "center",
							verticalAlign: "bottom"
						}
					}
				}]
			}

		};
	}
}

		

