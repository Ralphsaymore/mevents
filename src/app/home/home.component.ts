import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   public islogged = 1;
   public user;
  public profile:any;
  
   servicesObservable: Observable<any[]>;
  constructor(public auth: AuthService, private db:AngularFireDatabase) { 
    this.profile = JSON.parse(localStorage.getItem('profile')) ;
   this.islogged = this.auth.islogged;
  }

  ngOnInit() {
    
    if(this.auth.userProfile.name ==null){
       this.islogged = 0;
    }
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
      });
    }

    

  }
}
