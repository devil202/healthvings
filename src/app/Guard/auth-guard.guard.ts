import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticateService } from '../services/authenticate.service';

@Injectable()
export class AuthGuardGuard implements CanActivate {
 
  constructor(private AuthenticateService:AuthenticateService, private router:Router){}
  canActivate() 
  {
	    if(this.AuthenticateService.loggedIn()) {
	      return true;
	    } else {
	      this.router.navigate(['']);
	      return false;
	    }
	}
}