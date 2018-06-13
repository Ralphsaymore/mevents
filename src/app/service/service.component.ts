import { Component, OnInit } from '@angular/core';
import { ServicesService} from '../services/services.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
   providers: [ServicesService]
})
export class ServiceComponent implements OnInit {
  
  public service;
  constructor(private servicesservice: ServicesService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    const serviceId = this.activeRoute.snapshot.params['serviceId']; 
    this.servicesservice.getServiceDetails(serviceId).subscribe(
      res => {
        this.service = res;
        console.log(this.service);
      }
    ) 
  }
}
