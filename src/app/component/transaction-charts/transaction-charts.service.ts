import { HttpClient } from '@angular/common/http';
import {map, filter} from 'rxjs/operators'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TInterface } from '../transaction-list/transaction.interface';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
    providedIn: 'root'
})

export class TransactionChartService{
    constructor(private http: HttpClient) { }

getData(){
    return amount;
}
  chartData(){
    
    return this.http.get("assets/details/transactiondetails.json");
      }
}

const amount= [250, 500, 150, 400, 550]