import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthGuard implements CanActivate {
  constructor(private login:LoginService,private router:Router){}
  canActivate():boolean{
    if(this.login.loggedIn())
    {
      return false;
    }
    else
    {
      return true;
    }
  }
  
}
