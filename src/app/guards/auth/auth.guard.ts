import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/providers/auth/user-auth.service';
import { DashboardComponent } from 'src/app/component/dashboard/dashboard.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private usersService:UserAuthService, private router:Router ){
    console.log('Auth Guard');
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): 
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.usersService.authenticationCheck()){
        return true;
     }else{
      alert(`you are not authorize person`);
      this.router.navigate(["/login"]);
     }
  }
  
}
