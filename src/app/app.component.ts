import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'POC';

  user: any = {name: 'Bhanu', password: 'BHanu@123'}

  constructor() { }

  ngOnInit(): void {
    sessionStorage.setItem('user', JSON.stringify(this.user));
    console.log('json data', JSON.parse(sessionStorage.getItem('user')))
    console.log('json data', JSON.parse(sessionStorage.getItem('user')))
  }

}
