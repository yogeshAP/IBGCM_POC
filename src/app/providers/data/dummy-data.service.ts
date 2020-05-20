import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Data} from '../../interface/data';
@Injectable({
  providedIn: 'root'
})

export class DummyDataService {

  URL: string = 'api/Users';
  
  constructor(private http:HttpClient) { }

  getDataByID(id:string):Observable<Data>{
    console.log('getDataByID', id);
    return this.http.get<Data>(this.URL+'/'+id);
  }

  getData():Observable<Data[]>{
    return this.http.get<Data[]>(this.URL);
  }

  postData(data: Data):Observable<Data>{
    let httpHeaders = new HttpHeaders()
    .set('content-type','application/json');
    let options = { headers: httpHeaders};
    return this.http.post<Data>(this.URL, data, options);
  }

  updateData(data: Data):Observable<number>{
    let httpHeaders = new HttpHeaders()
    .set('content-type','application/json');
    let options = { headers: httpHeaders};
    return this.http.put<number>(this.URL+'/'+data.id, data, options);
  }

  deleteData(userId:string):Observable<number>{
    let httpHeaders = new HttpHeaders()
    .set('content-type','application/json');
    let options = { headers: httpHeaders};
    return this.http.delete<number>(this.URL+'/'+userId);
  }

}


