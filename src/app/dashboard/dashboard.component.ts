import { Component, OnInit } from '@angular/core';
import { SaveDataService } from '../services/save-data.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	title:String;
	content:String;

  constructor(private saveData:SaveDataService,private flashMessage:FlashMessagesService) { }

  ngOnInit() {
  }

  saveDetails()
  {
    this.saveData.save({title:this.title,content:this.content}).subscribe(data=>{
      if(data.success) 
        {
          this.flashMessage.show(data.msg.toString(),{ cssClass: 'alert-success', timeout: 1000 });
          this.title=null;
          this.content=null;
        }
      else this.flashMessage.show(data.msg.toString(),{ cssClass: 'alert-danger', timeout: 1000 });
    })
  }

}
