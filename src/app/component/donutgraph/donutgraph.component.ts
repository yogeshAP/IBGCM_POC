import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js';

// import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-donutgraph',
  templateUrl: './donutgraph.component.html',
  styleUrls: ['./donutgraph.component.scss']
})
export class DonutgraphComponent implements OnInit {
  @Input() data: any;
  @Input() labels: any;
  @Input() bgColors: any;
  
  doughtnut:any;
  chart: Chart;
  tempChart: Chart;

  constructor() {this.doughtnut = 'doughtnut'; }

  ngOnInit() {
    
    setTimeout(() => {
      this.getGraphData();
    }, 500);
  }

  getColors(color) {
    return color.toLowerCase();
  }


  getGraphData() {
    if (this.tempChart) {
      this.tempChart.destroy();
    }
    this.chart = new Chart('doughtnut', {
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
          display: false
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
