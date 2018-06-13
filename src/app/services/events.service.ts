import { Injectable} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class EventsService{
isAll:boolean;
constructor(private http: Http){
    this.isAll =true;
}
 
    getEvents(){
    {
      return this.http.get('https://meeventsbackend.firebaseio.com/events')
       .map(
           res => {
               const data = res.json();
               return data;
           }
       )
    }
}
 getEventDetails(eventId){
        const url = 'http://localhost:8000/service/'+eventId;
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
