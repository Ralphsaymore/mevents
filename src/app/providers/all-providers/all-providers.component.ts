import { Component, OnInit } from '@angular/core';
import { ProvidersService} from '../../providers/providers.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-all-providers',
  templateUrl: './all-providers.component.html',
  styleUrls: ['./all-providers.component.css']
})
export class AllProvidersComponent implements OnInit {

  public isSearched;
  public isChild;
  public providers;
  public searchedproviders;
  public provider;
  public providers_count;
  public search_count;
  public searchtext;
  constructor(private router:Router, private providersservice : ProvidersService) {

  }

  ngOnInit() {
    this.providersservice.getProviders().subscribe(
     res => {
       this.providers = res;
       this.providers_count = res.length +" Total Providers";
       this.isSearched =0;
       this.isChild = 1;
     }
   );
  }
  onKeyUp(event){
    this.isSearched =1;
    this.searchtext =  event.target.value;
  }

  searchProvider(){
    
    this.providersservice.searchProvider(this.searchtext).subscribe(
      res =>{
        this.searchedproviders = res;
        this.search_count=res.length +" out of "+ this.providers_count+" Found with " ;
        console.log(this.providers);
        
      }
    );
  }
  showProviderDetails(service){
    this.router.navigate(['home/service',service.id]);
    console.log("method reached"+service);

  }
  getProvider(){
    const search_res = 1;
    this.providers = null;
    this.providersservice.getProviderDetails(search_res).subscribe(
      res => {
        this.providers = res;
        console.log(this.providers);
      }
    )
  }

  GetAllProviders(){
    this.providersservice.getProviders().subscribe(
      res => {
        this.providers = res;
        this.providers_count = res.length +" Providers";
        this.isSearched =0;
      }
    );
  }

}


