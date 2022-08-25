import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from './data';


@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private http:HttpClient) { }
  getDetails(){
    return this.http.get<Data[]>("https://hub.dummyapis.com/employee?noofRecords=15&idStarts=1001")
    // .pipe(map(res => res.data));
  }

    //post method to take new ids
    createData(data:Data){
      return this.http.post<Data>("http://localhost:3000/records",data);
    }


}
