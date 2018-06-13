import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
public islogged = 0;
  constructor( private auth: AuthService) { }

  ngOnInit() {
    this.islogged = this.auth.islogged;
  }

}
