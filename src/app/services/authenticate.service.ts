import { Injectable } from '@angular/core';
import { Http ,Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticateService {

  authToken:any;
    user:any;
  constructor(private http: Http) { }
  
  authenticateUser(username,password)
  {

  	let headers = new Headers();
	    headers.append('Content-Type', 'application/json');
	    return this.http.post('user/login',{username:username,password:password}, {headers: headers})
	      .map(res => res.json());
  }
  validateUser(username,password)
  {
  	if(username==undefined||password==undefined)return false;
  	else return true;
  }

  loadToken() {
    return localStorage.getItem('id_token');
  }

  loggedIn() {
    return tokenNotExpired('id_token');
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }
}
