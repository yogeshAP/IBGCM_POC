import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

declare var $: any;


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isCollapsed: boolean = false;
  modalValue: any = null;


  constructor() { }

  ngOnInit(): void {
  }

  // modal open()
  public open() {
    console.log('open() work');
    // $('#logoutModal').modal({
    //   show: true
    // });   
    $('#logoutModal').modal('show')
  }


  // modal hide
  modalHide() {
    console.log('hide() work');
    $('#logoutModal').modal({
      show: false
    });
  }


  canLogOut(value) {
    // console.log('canLogOut work');
    // this.modalValue = value;

    this.modalValue.then(function(val){
      //val is your returned value. argument called with resolve.
     //  alert(val);
     console.log("value: ", val);
     return true;
    
   }).catch(function(err){
      //user clicked cancel
      console.log("Error: ", err);
      
      return false;
    
     });
  }


  // canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
  //   console.log('model console');
  //   this.open();
  //   return true;
  // }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    console.log('model console');
    if (true) {
      return confirm(' Do you really want to logout');
    }
    return true;
  }

  openModal(): boolean | Observable<boolean> | Promise<boolean> | any {
    const modal = new Promise(function(resolve, reject){
      $('#logoutModal').modal('show');
      $('#logoutModal .btn-success').click(function(){
          resolve("user clicked");
      });
      $('#logoutModal .btn-danger').click(function(){
          reject("user clicked cancel");
      });
     }).then(function(val){
       //val is your returned value. argument called with resolve.
      //  alert(val);
      console.log("value: ", val);
      return true;
     
    }).catch(function(err){
       //user clicked cancel
       console.log("Error: ", err);
       
       return false;
     
      });
  }

  // openModal(): boolean | Observable<boolean> | Promise<boolean> | any {
  //   this.modalValue = new Promise(function(resolve, reject){
  //     $('#logoutModal').modal('show');
  //     $('#logoutModal .btn-success').click(function(){
  //         resolve("user clicked");
  //     });
  //     $('#logoutModal .btn-danger').click(function(){
  //         reject("user clicked cancel");
  //     });
  //    })
  // }

  




}
