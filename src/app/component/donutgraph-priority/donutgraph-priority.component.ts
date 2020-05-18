import { Component, OnInit,Input } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-donutgraph-priority',
  templateUrl: './donutgraph-priority.component.html',
  styleUrls: ['./donutgraph-priority.component.scss']
})
export class DonutgraphPriorityComponent implements OnInit {

  @Input() data: any ; 
	@Input() labels: any ;
	@Input() bgColors : any;
	chart : Chart;
	tempChart : Chart ;
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.getGraphData();
       },500);
	}
	
	getColors(color){
		return color.toLowerCase();
	}


  getGraphData(){
		if(this.tempChart){
			this.tempChart.destroy();
		}
		this.chart =	new Chart('doughtnut2', {
			type: 'doughnut',
			data: {
				datasets: [{
					data: this.data,
					backgroundColor: this.bgColors
				}],
				labels: this.labels
			},
			options: {
				cutoutPercentage: 65,	
				tooltips: {
					enabled: false
		 },
        responsive: true,
        maintainAspectRatio: false,
        elements: {
          arc: {
              borderWidth: 2
          }
				},
				legend: {
					display : false
					},
				animation: {
					animateScale: true,
					animateRotate: true
				}
			}
		});
		this.tempChart = this.chart;
	}
}
