import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ProvidersService {
  isAll:boolean;
  constructor(private http: Http){
      this.isAll =true;
  }
   
      getProviders(){
      {
        return this.http.get('http://localhost:8000/providers')
         .map(
             res => {
                 const data = res.json();
                 return data;
             }
         )
      }
  }
   getProviderDetails(serviceId){
          const url = 'http://localhost:8000/service/'+serviceId;
         return this.http.get(url).map(
              res => {
                  const service= res.json();
                  return service;
              }
          )
      }
  
      searchProvider(searchText){
          const url = 'http://localhost:8000/searchservice/'+searchText;
          return this.http.get(url).map(
               res => {              
                   const service= res.json();
                   return service;
               }
           )
          
      }
  }
