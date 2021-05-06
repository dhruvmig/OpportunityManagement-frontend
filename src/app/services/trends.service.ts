import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrendsService {

  constructor(private http:HttpClient) { 
    console.log("here we are ",)
  }

  getTrendsCount(trend:String)
  {
    return this.http.get(`${environment.apiBaseUrl}/getTrends/${trend}`);
  }
}
