import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase} from 'angularfire2/database';
import {Observer} from "rxjs";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-service-object',
  templateUrl: './service-object.component.html',
  styleUrls: ['./service-object.component.css']
 
})
export class ServiceObjectComponent implements OnInit {

  public serviceKey;
  public service;
  servicesObservable:Observable<any[]>;

  constructor(private route: ActivatedRoute, private db: AngularFireDatabase) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.serviceKey =  params['serviceId']
   });
   this.service = this.db.object('services/'+this.serviceKey).valueChanges();
   localStorage.setItem('selectedService',this.service);
}
}