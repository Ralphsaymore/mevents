import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {
 public islogged: boolean;
 public id:number;
 public name: string;
 public username: string;
 public password: string;
 public image_url: string;
 public twitter_name: string;
 public facebook_name: string;
 public email: string;
  
  constructor() {
    this.islogged = true;
    this.getUser();
    
   }

   getUser(){
    this.name ="Ralph Saymour";
    this.username = "ralph";
    this.image_url = "user-2";
    this.twitter_name = "ralphsaymour";
   }

}
