import { Injectable } from '@angular/core';
import { Http ,Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import { AuthenticateService } from './authenticate.service';
import 'rxjs/add/operator/map';
@Injectable()
export class SaveDataService {

  constructor(private http:Http,private AuthenticateService:AuthenticateService) { }

  save(post)
  {
  	let headers = new Headers();
  	headers.append('Authorization', this.AuthenticateService.loadToken().toString());
	    headers.append('Content-Type', 'application/json');
	    return this.http.post('post/new',post, {headers: headers})
	      .map(res => res.json());
  }

}