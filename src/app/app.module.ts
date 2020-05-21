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
import { TransactonListComponent } from './component/transaction-list/transaction-list.component';
import { TransactionChartsComponent } from './component/transaction-charts/transaction-charts.component';
import { ChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [
    AppComponent,
    TransactonListComponent,
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
    HomeComponent,
    TransactionChartsComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([]),
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
