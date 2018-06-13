import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Event } from './events';
import { AuthService } from './../auth/auth.service';
import { Http } from '@angular/http';
import 'rxjs/Rx';

//Firebase
declare var firebase: any;
import { Observable} from 'rxjs/Observable';
import { AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-events', 
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit  {
 
    public events;
    public newevent;
    public saved_details;
    public more_details;
    public tab;
    public islogged = 0;
    public profile;

    //observables
    eventsObservable:Observable<any[]>;

    //new event variables
    public title;
    public description;
    public start_date;
    public end_date;
    public is_public;
    public user_id;
    public created_at;
    
   constructor(private http: Http, private router:Router, private auth: AuthService, private af: AngularFireDatabase,) {
    }
  ngOnInit(){
   this.tab = 0;
   this.saved_details =  false;
   this.created_at = Date.now();
   this.more_details = false;
   this.islogged = this.auth.islogged;
   this.profile = this.auth.userProfile;
   this.events = this.getEvents(); 
  }

  getEvents(){
    return this.af.list('/events').valueChanges();
   
  }
 
    onInsert() {
      //this.addItem(this.item);
      this.saved_details =  true;
    }

    onDelete() {
      //this.deleteItemByKey(this.item);
    }

    allEvents(){
     this.tab = 0;
    }

    newEvent(){
     this.tab=1;
    }
    discardEvent(){
      this.tab = 0;
    }

    moreDetails(){
      this.more_details = 1;
    }
    minimizeDetails(){
      this.more_details = 0;
    }

     createEvent(){
      this.newevent = {
        "title" : this.title,
        "description": this.description,
        "start_date" :this.start_date,
        "end_date": this.end_date,
        "is_public": this.is_public,
        "user_id": localStorage.getItem("sub"),
        "user_name": localStorage.getItem("username"),
        "user_picture": localStorage.getItem("picture"),
        "eventParticipants":"null",
        "participants_female":0,
        "participants_male":0,
        "created_at":this.created_at
      }
      this.af.database.ref('/events').push(this.newevent);
      console.log(this.newevent);
     }

      addItem(value: string): void {
        //this.item ="Daaa";
       // this.items.push(this.values);
      }

      deleteItemByKey($key: string) {
        //this.items.remove(this.values);
        }
}
