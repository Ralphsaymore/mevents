import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-provider-profile',
  templateUrl: './provider-profile.component.html',
  styleUrls: ['./provider-profile.component.css']
})
export class ProviderProfileComponent implements OnInit {

  service: any;
  serviceKey: any;
  constructor(private db:AngularFireDatabase) { }

  ngOnInit() {

    this.service = localStorage.getItem('selectedService');
  
    
  }

}
