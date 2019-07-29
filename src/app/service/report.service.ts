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

<<<<<<< HEAD
 

  public addReport(report: Report){
    
=======
  // public getPosts(){
  //   return this.http.get<Post[]>(this.url);
  // }

  public addReport(report: Report){
    report.reportType.reportType=1;
    report.reportType.reportTypeId=1;

>>>>>>> origin/v3
    // this.reqOptions.headers.append('test', 'test'); //if you have more headers
 
     return this.http.post<Report>(`${this.url}`, report);
 
   }

  
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/v3
