import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TransactionChartService } from './transaction-charts.service';
import {Chart} from 'chart.js';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { ValueCache } from 'ag-grid-community';
import { TransactionService } from '../transaction-list/transaction-list.service';

@Component({
    templateUrl: './transaction-charts.component.html',
    styleUrls: ['./transaction-charts.component.scss']
})

export class TransactionChartsComponent implements OnInit{
        chartData: any;
        chartAmount: any[] = [];
        chartArray:any;
    constructor(private detailService: TransactionService) { }
    ngOnInit() {
      this.detailService.getDetails().forEach(data=>
        {
          console.log('chart data', data.amount) ;
          this.chartAmount.push(data.amount);


        })  
      console.log('this.chartAmount', this.chartAmount);
      // this.chartservice.getDetails().subscribe({
        //     next: data=> {
        //       console.log("rowData" + data);
        //       this.chartData=data;
        //     }
        //   })
        //   this.cal(this.chartData);
    }

    cal(data){
        for(let i=0; i<data.length;i++){
            console.log("cal data"+ data[i])
        }
    }

    public pieChartOptions: ChartOptions = {
        responsive: true,
        legend: {
          position: 'top',
        },
        plugins: {
          datalabels: {
            formatter: (value, ctx) => {
              const label = ctx.chart.data.labels[ctx.dataIndex];
              return label;
            },
          },
        }
      };
      public pieChartLabels: Label[] = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
      public pieChartData: number[] = this.chartAmount;
      public pieChartType: ChartType = 'pie';
      public pieChartLegend = true;
      public pieChartColors = [
        {
          backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
        },
      ];

    
     
    
}