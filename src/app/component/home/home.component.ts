import { Component, OnInit } from '@angular/core';
import { DummyDataService } from 'src/app/providers/data/dummy-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  myTaskData: any[] = [77, 23];
  myTaskLabels: any[] = ['Item-1', 'Item-2'];
  myTaskBgColors: any[] = ['#4b7cf3', '#2acd72'];

  pendingData: any[] = [3, 1, 6];
  pendingLabels: any[] = ['Item-1', 'Item-2', 'Item-3'];
  pendingBgColors: any[] = ['#2acd72', '#fac751', '#4b7cf3'];

  prorityData: any[] = [11, 7, 9];
  prorityLabels: any[] = ['Item-1', 'Item-2', 'Item-3'];
  prorityBgColors: any[] = ['#dd4955', '#2acd72', '#fac751'];

  todayDate: any = new Date();
  users: any[];

  tableHeader: string;

  task1: boolean = false;
  task2: boolean = false;
  task3: boolean = false;

  constructor(private dataService: DummyDataService) {
    this.dataService.getData().subscribe(data => {
      console.log('service data', data);
      this.users = data;
    }
    );
  }
  ngOnInit(): void {
    this.mytask1();
  }

  userEditData(userId) {

  }

  deleteUser(userId) {
  }

  mytask1() {
    this.tableHeader = 'My Task-1';
    this.task1 = true;
    this.task2 = false;
    this.task3 = false;
  }
  mytask2() {
    this.tableHeader = 'My Task-2';
    this.task1 = false;
    this.task2 = true;
    this.task3 = false;
  }
  mytask3() {
    this.tableHeader = 'My Task-3';
    this.task1 = false;
    this.task2 = false;
    this.task3 = true;
  }

}
