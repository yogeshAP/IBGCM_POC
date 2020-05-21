import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  authenticationCheck(){
    if(sessionStorage.length>0){
      console.log('sessionStorage.length true', sessionStorage.length)
      return true;
    }
    else{
      console.log('sessionStorage.length false', sessionStorage.length)
      return false;
    }
    
  }
}
