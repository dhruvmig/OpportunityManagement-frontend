import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrendsService {

  constructor(private http:HttpClient) { }

  getTrendsCount(trend:String)
  {
    return this.http.get(`http://localhost:8080/getTrends/${trend}`);
  }
}
