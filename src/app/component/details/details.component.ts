import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DetailsService } from './details.service';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private http: HttpClient, private detailService: DetailsService) { }

  @ViewChild('grid') grid: AgGridAngular

  columnDefs = [
    {headerName: 'Transaction ID', field: 'transactionId', sortable:true, filter:true },
    {headerName: 'Narration', field: 'narration', sortable:true, filter:true },
    {headerName: 'Amount', field: 'amount', sortable:true, filter:true, checkboxSelection: true },
    {headerName: 'Date', field: 'date', sortable:true, filter:true},
    {headerName: 'Type', field: 'type', sortable:true, filter:true}
];

// autoGroupColumnDef = {
//   headerName: 'Type',
//   field: 'type',
//   cellRenderer: 'agGroupCellRenderer',
//   cellRendererParams: {
//       checkbox: true
//   }
// };

rowData:any;

  ngOnInit(): void {
    this.detailService.getDetails().subscribe({
      next: data=> this.rowData=data
    })
  }

  getSelectedRows() {
    const selectedNodes = this.grid.api.getSelectedNodes();
    const selectedData = selectedNodes.map( node => node.data );
    const selectedDataStringPresentation = selectedData.map( node => node.amount + ' ' + node.type).join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
}

populateSum(){
  let sum=0;
  const selectedNodes = this.grid.api.getSelectedNodes();
  const selectedData = selectedNodes.map( node => node.data );
  selectedData.forEach(node=>sum+=node.amount);
  console.log(sum);
  console.log("Hi")
}

sumByWithdrawal(){
  let sum=0;
  const selectedNodes= this.grid.api.getSelectedNodes();
  const selectedData= selectedNodes.map(node=>node.data);
  selectedData.forEach(node=>{if(node.type==="Withdrawal"){sum+=node.amount}})
  
  console.log(sum)
}

sumByDeposit(){
  let sum=0;
  const selectedNodes= this.grid.api.getSelectedNodes();
  const selectedData= selectedNodes.map(node=>node.data);
  selectedData.forEach(node=>{if(node.type==="Deposit"){sum+=node.amount}})
  
  console.log(sum)
}

}
