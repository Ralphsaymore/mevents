import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {UploadFileService} from '../../appservices/upload-file.service';

//Firebase
import { AngularFireDatabase } from 'angularfire2/database';
import { Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '.././../auth/auth.service';

import {FileUpload} from '../../fileupload';

 


@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {
  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  progress: {percentage: number} = {percentage: 0}

  public tab1;
  public serviceid;
  public sortedServices;
  public sub;
  public more_details;
  public saved_details;
  public provider;
  public isNewService;
  fileToUpload: File = null;
  servicesObservable:Observable<any[]>;
  public myservices;
  public newservice;
  public items;
  public title;
  public description;
  public phone;
  public profile;
  public created_at:any;
  constructor(private router:Router, private af: AngularFireDatabase,
     private http: Http, public auth: AuthService, public uploadService: UploadFileService) { }

  ngOnInit() {
    this.tab1 =  false;
    this.saved_details =  false;
    this.more_details = false;
    this.isNewService = false;
    this.profile = this.auth.userProfile;
    this.sub = this.profile.sub;
    this.created_at = Date.now();
    
   
  
    
    this.servicesObservable = this.retrieveData('/services');
    this.myservices = this.servicesObservable;
   this.returnImgUrl();
 
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
 
  upload() {
    const file = this.selectedFiles.item(0)
    this.currentFileUpload = new FileUpload(file);
    this.uploadService.pushFileToStorage(this.currentFileUpload, this.progress)
  }

  retrieveData(listPath) {
    this.tab1 =  false;
    this.isNewService = false;
   
    
  return this.af.list(listPath).valueChanges();
  }

  newService(){
    this.isNewService = true;
    
  }
  onInsert() {
    this.upload();
    this.getNewService();
    //console.log(this.newservice);
   
    this.saved_details =  true;
      this.getServiceImageUrl();
    }

  onDelete() {
    //this.deleteItemByKey(this.item);
  }
  
  createProvider(provider){
    this.provider = {
      "name" : provider.name,
      "national_id": provider.national_id
    };
    
   }
  accountSetup(){
    this.tab1 =  true;
  }
  myServices(){
    this.tab1 =  false;
     //Return specific elements
  this.sortedServices = this.af.database.ref('/services') .orderByChild("created_at").equalTo(this.profile.sub).on("child_added", function(data) {
    console.log("Equal to filter: " + data.val().title);
 });

 this.getUserServicesCount();

}
  moreDetails(){
    this.more_details = 1;
  }
  minimizeDetails(){
    this.more_details = 0;
  }
 returnImgUrl(){
  var sortedRef = this.af.database.ref('/services').orderByChild('timeCreated');
  //sort them by timeCreated, ascending
  
sortedRef.limitToLast(1).on("child_added", function(snapshot){
  var temp = snapshot.key;
  var title = 'Like';
 //console.log(temp);

 });

}
/* makeServiceId() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
 */

SaveService(){
  var myurl = JSON.parse(localStorage.getItem('myurl'));
 
  this.newservice = {
    'sub':this.profile.sub,
    'title' : this.title,
    'user_picture_url':this.profile.picture,
    'description' : this.description,
    'phone_1' : this.phone,
    'phone_2' : 'null',
    'phone_3' : '',
    'service_id': '',
    'image1_url' :myurl,
    'image2_url' : '',
    'image3_url' : '',
    'provider' : this.profile.nickname,
    'videoUrl' : '',
    'likes' : 0,
    'unlikes' : 0,
    'bookings' : 0,
    'purchases' : 0,
    'updated_at': this.created_at,
    'created_at' : this.created_at
    
  }     
   var newRef = this.af.database.ref('/services').push(this.newservice);
// get just the key reference
var serviceKey= newRef.key;

//then change this refer
    
    this.af.object('/services/'+serviceKey).update({'service_id':serviceKey});
}

openCheckout() {
  var handler = (<any>window).StripeCheckout.configure({
    key: 'pk_test_oi0sKPJYLGjdvOXOM8tE8cMa',
    locale: 'auto',
    token: function (token: any) {
      // You can access the token ID with `token.id`.
      // Get the token ID to your server-side code for use.
    }
  });

  handler.open({
    name: 'Demo Site',
    description: '2 widgets',
    amount: 2000
  });

}

  getNewService(){
   
  
    /* do something else with the data */
    
    
  }
   // Default error handling for all actions
 private handleError(error) {
  console.log(error)
}

//get the images 
getServiceImageUrl() {
}

getUserServicesCount(){

     //Return user's number of services 
     this.sortedServices = this.af.database.ref('/services') .orderByChild("created_at").equalTo(this.profile.sub).on("child_added", function(data) {
      console.log("Equal to filter: " + data.numChildren);
   });

}

}
