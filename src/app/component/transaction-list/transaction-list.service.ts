import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class TransactionService{
   emp:any[] = [
    { "transactionId": "12345", "narration": "PaytmUpi", "amount": 250, "date": "10 Dec 2019", "type": "Withdrawal" },
    { "transactionId": "11347", "narration": "PhonePeUpi", "amount": 500, "date": "11 Dec 2019", "type": "Withdrawal" },
    { "transactionId": "13565", "narration": "GooglePayUpi", "amount": 220, "date": "12 Dec 2019", "type": "Deposit" },
    { "transactionId": "14895", "narration": "FriendTransfer", "amount": 150, "date": "13 Dec 2019", "type": "Withdrawal" },
    { "transactionId": "15115", "narration": "PM cares fund", "amount": 100, "date": "14 Dec 2019", "type": "Deposit" }
]
    constructor(private http: HttpClient){
    }

    getDetails(){
        return this.emp;
    }
}