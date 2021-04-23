// import { HttpClient } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Opportunity} from '../models/opportunity.model';
import { LoginService } from './login.service';
@Injectable({
  providedIn: 'root'
})
export class OpportunityService {

  constructor(private http:HttpClient,private loginService :LoginService) { }

  public getOpportunity(): Observable<Opportunity[]> {
    return this.http.get<Opportunity[]>(`http://localhost:8080/opportunity`);
  }

  public addOpportunity(opportunity: Opportunity): Observable<Opportunity> {
    let currentUser = this.loginService.getCurrentUser();
    console.log("in service ",opportunity,currentUser,opportunity);
    return this.http.post<Opportunity>(`http://localhost:8080/opportunities/add/${currentUser}`, opportunity);

  }

  public deleteOpportunity(id:number){
    return this.http.delete(`http://localhost:8080/opportunity/delete/${id}`);
  }
  public updateOpportunity(id:number,opportunity:Opportunity){
    return this.http.put(`http://localhost:8080/opportunity/update/${id}`,opportunity);
  }

  public checkAccess(id:number)
  {
    return this.http.get(`http://localhost:8080/opportunity/getCreatedBy/${id}`);
  }

}
