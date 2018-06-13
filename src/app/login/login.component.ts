import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { Router} from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor( private router: Router, public auth: AuthService) {
    auth.handleAuthentication();
   }
  form;
  ngOnInit() {
    this.form = new FormGroup({
      email:new FormControl(),
      password: new FormControl(),

    })
  }
  onsubmit(credentials){
  console.log(credentials);
  this.router.navigate(['/setup']);
  }

}
