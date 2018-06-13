import { Injectable} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class ServicesService{
isAll:boolean;
constructor(private http: Http){
    this.isAll =true;
}
 
    getservices(){
    {
      return this.http.get('https://meeventsbackend.firebaseio.com/services')
       .map(
           res => {
               const data = res.json();
               return data;
           }
       )
    }
}
 getServiceDetails(serviceId){
        const url = 'http://localhost:8000/service/'+serviceId;
       return this.http.get(url).map(
            res => {
                const service= res.json();
                return service;
            }
        )
    }

    


    searchservice(searchText){
        const url = 'http://localhost:8000/searchservice/'+searchText;
        return this.http.get(url).map(
             res => {              
                 const service= res.json();
                 return service;
             }
         )
        
    }
}
