import { Injectable } from '@angular/core';
import { Report } from '../model/report';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:8081/Project2/report';
  reqOptions = {

    headers: new HttpHeaders({'Content-Type' : 'application/json'}) 

  };

 

  public addReport(report: Report){
    
    // this.reqOptions.headers.append('test', 'test'); //if you have more headers
 
     return this.http.post<Report>(`${this.url}`, report);
 
   }

  
}
