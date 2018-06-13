import { Component,Directive, OnInit } from '@angular/core';
import {ServicesService} from '../services/services.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})


export class SearchComponent implements OnInit {
  public searchtext;
  public services;
  public searchCount;
  
  constructor(private servicesservice: ServicesService) { }

  ngOnInit() {
  }

  onKeyUp(event){
    this.searchtext =  event.target.value;
  }

  getServices(){
    
    this.servicesservice.searchservice(this.searchtext).subscribe(
      res =>{
        this.services = res;
        this.searchCount =res.length + " Found";
        console.log(this.services);
        console.log(this.searchCount);
      }
    );
  }
}
