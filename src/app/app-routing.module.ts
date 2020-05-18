import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DetailsComponent } from './component/details/details.component';
import { PNFComponent } from './component/pnf/pnf.component';
import { HomeComponent } from './component/home/home.component';


const routes: Routes = [
  { path: '', redirectTo:'/login', pathMatch:'full'},
  
  { path: 'dashboard', 
    component: DashboardComponent, 
    children: [
      
      { path: 'home', component: HomeComponent },
      { path: 'details', component: DetailsComponent },  
      { path: '', redirectTo:'home', pathMatch:'full'},  
      { path: '**', component: PNFComponent }
    ]
  },
  
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo:'/login', pathMatch:'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
