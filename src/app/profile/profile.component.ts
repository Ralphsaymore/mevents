import { Component, OnInit } from '@angular/core';
import {UsersService} from '../appservices/users/users.service';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public islogged: boolean;
  public id:number;
  public name: string;
  public username: string;
  public password: string;
  public image_url: string;
  public twitter_name: string;
  public facebook_name: string;
  public email: string;

  public profile:any;

  constructor(private user: UsersService, public auth: AuthService) {
    this.profile = JSON.parse(localStorage.getItem('profile')) ;
   }
 
  ngOnInit() {
    
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
      localStorage.setItem("sub",this.profile.sub);
      localStorage.setItem("picture", this.profile.picture); 
      localStorage.setItem("username", this.profile.nickname);
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
      });
    }
  }

}
