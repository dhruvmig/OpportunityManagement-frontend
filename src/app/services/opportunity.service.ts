// import { HttpClient } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Opportunity} from '../models/opportunity.model';
@Injectable({
  providedIn: 'root'
})
export class OpportunityService {

  constructor(private http:HttpClient) { }

  public getEmployees(): Observable<Opportunity[]> {
    return this.http.get<Opportunity[]>(`http://localhost:8080/opportunity/all`);
  }

  public addEmployee(opportunity: Opportunity): Observable<Opportunity> {
    console.log("in service ",opportunity)
    return this.http.post<Opportunity>(`http://localhost:8080/opportunity/add`, opportunity);

  }

}
