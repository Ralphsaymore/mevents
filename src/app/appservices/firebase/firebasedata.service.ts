import { Injectable } from '@angular/core';
declare var firebase: any;
import { Http, Response } from '@angular/http';
import { Observable} from 'rxjs/Observable';


@Injectable()
export class FirebaseService {

      servicesObservable:Observable<any[]>;
      finalItems;
      public db;
      public myData: any[] =[];

    constructor() {
       this.servicesObservable = this.getServices('/services');
      }

      getServices(listPath):Observable<any[]> {
        return this.db.list(listPath);
      }




     /* return this.db.object('/services').snapshotChanges().map(action => {
        this.finalItems = { ...action.payload.val() };

      }).subscribe(res => {
        const data = res.json();
        console.log(data);
        return data;
      }   
      ); */
     
      

}
