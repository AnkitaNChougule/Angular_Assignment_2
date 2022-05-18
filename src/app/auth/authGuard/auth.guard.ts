import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../../Service/authservice.service';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router:Router,
    private authservice:AuthserviceService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): 
      Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
      {
        var isAuthenticated = this.authservice.authstatus;
        if (!isAuthenticated) {
          this.router.navigate(['Unauthorized'])  
        }
        return isAuthenticated;   
      }
 
}
