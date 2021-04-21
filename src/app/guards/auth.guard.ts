import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot,Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from '../services/login.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private login:LoginService,private router:Router){}
  canActivate():boolean{
    if(this.login.loggedIn())
    {
      // this.router.navigate(['/opportunities']);
      return true;
    }
    else{
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}
