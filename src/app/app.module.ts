import { JwtInterceptor } from './helpers/jwt-interceptor.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

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
import { AddactionComponent } from './components/addaction/addaction.component';
import { ShowaddactionComponent } from './pages/showaddaction/showaddaction.component';
import { GetactionComponent } from './components/getaction/getaction.component';
import { ShowgetactionComponent } from './pages/showgetaction/showgetaction.component';
import { AddrendezvousComponent } from './components/addrendezvous/addrendezvous.component';
import { ShowaddrendezvousComponent } from './pages/showaddrendezvous/showaddrendezvous.component';
import { EditEnfantComponent } from './components/edit-enfant/edit-enfant.component';
import { ShoweditEnfantComponent } from './pages/showedit-enfant/showedit-enfant.component';
import { EditRendezvousComponent } from './components/edit-rendezvous/edit-rendezvous.component';
import { ShoweditRendezvousComponent } from './pages/showedit-rendezvous/showedit-rendezvous.component';
import { ListrvComponent } from './components/listrv/listrv.component';
import { ShowlistrvComponent } from './pages/showlistrv/showlistrv.component';
import { HomecompComponent } from './components/homecomp/homecomp.component';
import { HomeComponent } from './pages/home/home.component';



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
    ShowgettypeComponent,
    AddactionComponent,
    ShowaddactionComponent,
    GetactionComponent,
    ShowgetactionComponent,
    AddrendezvousComponent,
    ShowaddrendezvousComponent,
    EditEnfantComponent,
    ShoweditEnfantComponent,
    EditRendezvousComponent,
    ShoweditRendezvousComponent,
    ListrvComponent,
    ShowlistrvComponent,
    HomecompComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
 
  ],
  providers: [

    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
