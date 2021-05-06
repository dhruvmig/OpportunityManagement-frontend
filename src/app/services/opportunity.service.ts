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
    return this.http.get<Opportunity[]>(`http://localhost:8080/opportunities/active`);
  }

  public getAllOpportunity(): Observable<Opportunity[]> {
    return this.http.get<Opportunity[]>(`http://localhost:8080/opportunities/all`);
  }

  public addOpportunity(opportunity: Opportunity): Observable<Opportunity> {
    let currentUser = this.loginService.getCurrentUser();
    console.log("in service ",opportunity,currentUser,opportunity);
    return this.http.post<Opportunity>(`http://localhost:8080/opportunity/add/${currentUser}`, opportunity);

  }

  public deactivateOpportunity(id:number,currentUser:String){
    return this.http.post(`http://localhost:8080/opportunities/deactivate/${currentUser}/${id}`,'');
  }

  public deleteOpportunity(id:number,currentUser:String){
    return this.http.delete(`http://localhost:8080/opportunities/delete/${currentUser}/${id}`);
  }
  public updateOpportunity(currentUser:String,id:number,opportunity:Opportunity){
    console.log("opportunity to update is ",currentUser);
    return this.http.put(`http://localhost:8080/opportunities/update/${currentUser}/${id}`,opportunity);
  }

  public checkAccess(id:number)
  {
    return this.http.get(`http://localhost:8080/opportunities/getCreatedBy/${id}`);
  }
  public getLogData(id:number)
  {
    return this.http.get(`http://localhost:8080/getAudit/${id}`);
  }

}
