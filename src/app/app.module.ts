import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { AuthService, AUTH_PROVIDERS } from './auth.service';
import { LoggedinguardService } from './loggedinguard.service';

import { ProtectedComponent } from './protected/protected.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch:'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactUsComponent, },
  { path: 'contactus', redirectTo: 'contact' },
   { path: 'protected', component: ProtectedComponent,
    canActivate: [LoggedinguardService]}
];
@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(routes) // <-- routes
   ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, AboutUsComponent, ContactUsComponent, LoginComponent, ProtectedComponent ],
  bootstrap:    [ AppComponent ],
providers: [
    AUTH_PROVIDERS,
    LoggedinguardService,
 
  ]
})
export class AppModule { }
