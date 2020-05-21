import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DashboardComponent } from 'src/app/component/dashboard/dashboard.component';


@Injectable({
  providedIn: 'root'
})
export class ConfirmationGuard implements CanDeactivate<DashboardComponent> {
  canDeactivate(
    component: DashboardComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return window.confirm('are you really want to Logout');
    // return component.openModal();
    if(component.openModal()){
      console.log('component.openModal()- true', component.openModal())
      return true;
    }
    else{
      console.log('component.openModal()- false', component.openModal())
      return false;
    }
  }

}
