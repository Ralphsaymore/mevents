import { Routes} from '@angular/router';
import { HomeComponent} from './home/home.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ServicesComponent} from './services/services.component';
import { EventsComponent} from './events/events.component';
import { CompaniesComponent} from './companies/companies.component';
import {ServiceComponent} from './service/service.component';


export const HomeRoutes: Routes = [
    {
        path: 'home', component : HomeComponent,
        children:[
            {path:'',outlet: "services", component : HomeComponent},
            {path:'timeline',component:TimelineComponent},
            {path:'services',component:ServicesComponent},
            {path:'events',component:EventsComponent},
            {path:'explore',component:CompaniesComponent},
            {path:'service/:serviceId',component:ServiceComponent}
           
        ]
    }

]