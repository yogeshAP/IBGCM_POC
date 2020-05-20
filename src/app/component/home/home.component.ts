import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  myTaskData : any[] = [77, 23];
  myTaskLabels : any[] = ['Item-1', 'Item-2'];
  myTaskBgColors :  any[] = ['#4b7cf3', '#2acd72'];

  pendingData : any[] = [3, 1,6];
  pendingLabels : any[] = ['Item-1', 'Item-2','Item-3'];
  pendingBgColors :  any[] = ['#2acd72','#fac751', '#4b7cf3'];
  
  prorityData : any[] = [11, 7,9];
  prorityLabels : any[] = ['Item-1', 'Item-2','Item-3'];
  prorityBgColors :  any[] = ['#dd4955', '#2acd72','#fac751'];

  todayDate:any = new Date();
  users:any[];
  constructor() { }

  ngOnInit(): void {
  }

  userEditData(userId){

  }
  deleteUser(userId){

  }

}
