import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LogsService {

  constructor(private http:HttpClient) { }

  getLogs(){
    return this.http.get(`${environment.apiBaseUrl}/audits/all`);
  }
}
