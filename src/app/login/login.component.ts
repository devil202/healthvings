import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../services/authenticate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	username:String;
	password:String;
  constructor(private AuthenticateService:AuthenticateService,private flashMessage:FlashMessagesService,private router:Router) { }

  ngOnInit() {
  }
  LogIn()
  {
  	if(this.AuthenticateService.validateUser(this.username,this.password)){
  		this.AuthenticateService.authenticateUser(this.username,this.password).subscribe(data=>{
  			if(data.success)
			{ 
        this.AuthenticateService.storeUserData(data.token, data.user);
				this.flashMessage.show(data.user.name.toString(),{ cssClass: 'alert-success', timeout: 1000 });
				this.router.navigate(['/home']);
			}
  			else this.flashMessage.show(data.msg.toString(),{ cssClass: 'alert-danger', timeout: 1000 });		
  		})
  	
  	}
  	else 
  	this.flashMessage.show('empty',{ cssClass: 'alert-danger', timeout: 1000 });
  }

}
