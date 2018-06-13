import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AuthService } from './auth/auth.service';
import { CallbackComponent } from './callback/callback.component';


//Components
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TimelineComponent } from './timeline/timeline.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { router } from './app.routing';
import { SetupComponent } from './setup/setup.component';
import { EventsComponent } from './events/events.component';
import { ServicesComponent } from './services/services.component';
import { CompaniesComponent } from './companies/companies.component';
import { ChatComponent } from './chat/chat.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { ServiceComponent } from './service/service.component';
import { ProviderComponent } from './provider/provider.component';
import { ProvidersComponent } from './providers/providers.component';
import { AllProvidersComponent } from './providers/all-providers/all-providers.component';
import { JoinComponent } from './providers/join/join.component';
import { ExploreComponent } from './services/explore/explore.component';
import { DefaultProfileComponent } from './default-profile/default-profile.component';
import { LocalProvidersComponent } from './providers/local-providers/local-providers.component';
import { RegionalProvidersComponent } from './providers/regional-providers/regional-providers.component';

//Services
import { ProvidersService } from './providers/providers.service';
import { ServicesService } from './services/services.service';
import { EventsService } from './services/events.service';
import { UsersService } from './appservices/users/users.service'
import { FirebaseService } from './appservices/firebase/firebasedata.service';
import { UploadFileService } from './appservices/upload-file.service';

//Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LearnComponent } from './learn/learn.component';
import { ServiceObjectComponent } from './service-object/service-object.component';
import { ProviderProfileComponent } from './provider-profile/provider-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent,
    RegisterComponent,
    LoginComponent,
    TimelineComponent,
    HomeComponent,
    WelcomeComponent,
    SetupComponent,
    EventsComponent,
    CompaniesComponent,
    ChatComponent,
    ProfileComponent,
    SearchComponent,
    ServicesComponent,
    ServiceComponent,
    ProviderComponent,
    ProvidersComponent,
    AllProvidersComponent,
    JoinComponent,
    ExploreComponent,
    DefaultProfileComponent,
    LocalProvidersComponent,
    RegionalProvidersComponent,
    LearnComponent,
    ServiceObjectComponent,
    ProviderProfileComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    router,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule
   
  ],
  providers: [
    ServicesService,
    EventsService,
    ProvidersService,
    UsersService,
    AuthService,
    FirebaseService,
    UploadFileService
            
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
