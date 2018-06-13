import { Routes , RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent} from './welcome/welcome.component';
import { TimelineComponent} from './timeline/timeline.component';
import { SetupComponent} from './setup/setup.component';
import { CompaniesComponent} from './companies/companies.component';
import { ServicesComponent} from './services/services.component';
import { EventsComponent} from './events/events.component';
import { ProviderComponent} from './provider/provider.component';
import { ProvidersComponent} from './providers/providers.component';
import {ServiceObjectComponent} from './service-object/service-object.component';

import {ProvidersRoutes} from './providers.routing';
import {HomeRoutes} from './home.routing';

const routes: Routes = [
    {path:'', redirectTo:'welcome',pathMatch:'full'},

    {path:'home', component: HomeComponent},
    {path:'providers', component: ProvidersComponent},
    {path:'welcome', component:WelcomeComponent},
    {path: 'timeline', component:TimelineComponent},
    { path: 'service/:serviceId', component: ServiceObjectComponent, },
    {path:'setup', component:SetupComponent},
    ...HomeRoutes,
    ...ProvidersRoutes,
   
]

export const router = RouterModule.forRoot(routes);
