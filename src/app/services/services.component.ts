import { Component, OnInit, Input } from '@angular/core';
import { Router} from '@angular/router';
import { Injectable } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Subject } from 'rxjs/Subject';

//Firebase
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
  
  public isSearched;
  public isChild;
  public services;
  public searchedservices;
  public service;
  public services_count;
  public search_count;
  public searchtext;

  startAt = new Subject()
  endAt = new Subject()

  servicesObservable:Observable<any[]>;
  finalItems;
  public myData: any[] =[];
 

  dataObservable:Observable<any[]>;
    
  constructor(private router:Router, private af: AngularFireDatabase, private route:ActivatedRoute, private db: AngularFireDatabase) {
    //this.route.data.forEach((data: {books: dataObservable:Observable<any[]>) => this.books = data.books);
   
   }
  ngOnInit() {
    
    //this.servicesObservable = this.getServices('/services');
    this.services = this.getServices();
   

    
  }
  onKeyUp(event){
    this.isSearched =1;
    this.searchtext =  event.target.value;
    
  }

  search($event) {
    let q = $event.target.value
    this.startAt.next(q)
    this.endAt.next(q+"\uf8ff")

    this.searchedservices(this.startAt, this.endAt)
    .subscribe(services => this.services = services)

    console.log(this.services);
}

searchServices(start, end) {
  return this.db.list('/services');
 
}



  showServiceDetails(service){
    this.router.navigate(['home/service',service.id]);
  }
  getServices(){
    return this.af.list('/services').valueChanges();
   
  }



/*   refreshList(){
    this.isSearched = 0;
    this.servicesObservable = this.getServices('/services');
    this.services = this.servicesObservable;
  } */


}
