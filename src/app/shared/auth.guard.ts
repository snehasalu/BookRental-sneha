import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  //create a constructor
  constructor(private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot):boolean{
      //check role:currentRole vs expectedRole
      //current role can get --from local storage-login 
      //expected role is getting from app.routing.module
      const expectedRole = next.data.role;
      const currentRole = localStorage.getItem('Accessrole');
     
      //check the condition
      if(currentRole !==expectedRole){
        this.router.navigateByUrl('/login');
        return false;
      }
    return true; 
  }
  
}
