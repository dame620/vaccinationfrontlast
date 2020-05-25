import { JwtInterceptor } from './helpers/jwt-interceptor.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { FormConnexionComponent } from './components/form-connexion/form-connexion.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { ShowadduserComponent } from './pages/showadduser/showadduser.component';
import { GetroleComponent } from './components/getrole/getrole.component';
import { ShowgetroleComponent } from './pages/showgetrole/showgetrole.component';
import { AddenfantComponent } from './components/addenfant/addenfant.component';
import { GetaddenfantComponent } from './pages/getaddenfant/getaddenfant.component';
import { GetenfantComponent } from './components/getenfant/getenfant.component';
import { ShowgetenfantComponent } from './pages/showgetenfant/showgetenfant.component';
import { GettypeComponent } from './components/gettype/gettype.component';
import { ShowgettypeComponent } from './pages/showgettype/showgettype.component';



@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    FormConnexionComponent,
    AdduserComponent,
    ShowadduserComponent,
    GetroleComponent,
    ShowgetroleComponent,
    AddenfantComponent,
    GetaddenfantComponent,
    GetenfantComponent,
    ShowgetenfantComponent,
    GettypeComponent,
    ShowgettypeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
 
  ],
  providers: [

    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
