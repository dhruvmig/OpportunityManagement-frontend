import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private cookie:CookieService,private http : HttpClient) { }
  getToken(){
    return this.cookie.get('token');
  }

  logout(){
    this.cookie.delete('token');
    console.log("logged out");
  }
  login(user:any){
    return this.http.post(`http://localhost:8080/login`, user);
  }
  loggedIn(){
    return !!this.cookie.get('token');
  }
}
