import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import 'ag-grid-enterprise';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { SideMenuComponent } from './component/side-menu/side-menu.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { DetailsComponent } from './component/details/details.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { PNFComponent } from './component/pnf/pnf.component';
import { DonutgraphComponent } from './component/donutgraph/donutgraph.component';
import { DonutgraphPendingComponent } from './component/donutgraph-pending/donutgraph-pending.component';
import { DonutgraphPriorityComponent } from './component/donutgraph-priority/donutgraph-priority.component';
import { HomeComponent } from './component/home/home.component';
import {AgGridModule} from 'ag-grid-angular';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SideMenuComponent,
    HeaderComponent,
    FooterComponent,
    DetailsComponent,
    DashboardComponent,
    PNFComponent,
    DonutgraphComponent,
    DonutgraphPendingComponent,
    DonutgraphPriorityComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([]),
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
