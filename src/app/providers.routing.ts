import { Routes} from '@angular/router';
import { ProvidersComponent} from './providers/providers.component';
import { AllProvidersComponent } from './providers/all-providers/all-providers.component';
import { LocalProvidersComponent } from './providers/local-providers/local-providers.component';
import { RegionalProvidersComponent } from './providers/regional-providers/regional-providers.component';
import { JoinComponent } from './providers/join/join.component';

export const ProvidersRoutes: Routes = [
    {
        path: 'providers', component : ProvidersComponent,
        children:[
            {path:'',redirectTo:'all', pathMatch:'full'},
            {path:'all',component:AllProvidersComponent},
            {path:'local-providers',component:LocalProvidersComponent},
            {path:'regional-providers',component:RegionalProvidersComponent},
            {path:'join-providers',component:JoinComponent}
           
        ]
    }

]