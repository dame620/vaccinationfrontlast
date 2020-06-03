import { ConnexionComponent } from './pages/connexion/connexion.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowadduserComponent } from './pages/showadduser/showadduser.component';
import { ShowgetroleComponent } from './pages/showgetrole/showgetrole.component';
import { GetaddenfantComponent } from './pages/getaddenfant/getaddenfant.component';
import { ShowgetenfantComponent } from './pages/showgetenfant/showgetenfant.component';
import { ShowgettypeComponent } from './pages/showgettype/showgettype.component';
import { ShowaddactionComponent } from './pages/showaddaction/showaddaction.component';
import { ShowgetactionComponent } from './pages/showgetaction/showgetaction.component';
import { ShoweditEnfantComponent } from './pages/showedit-enfant/showedit-enfant.component';
import { ShoweditRendezvousComponent } from './pages/showedit-rendezvous/showedit-rendezvous.component';
import { ShowaddrendezvousComponent } from './pages/showaddrendezvous/showaddrendezvous.component';
import { ShowlistrvComponent } from './pages/showlistrv/showlistrv.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {path:'login',component: ConnexionComponent},
  {path:'adduser',component: ShowadduserComponent},
  {path: 'getrole',component:  ShowgetroleComponent},
  {path: 'addenfant',component:  GetaddenfantComponent},
  {path: 'getenfant',component:   ShowgetenfantComponent},
  {path: 'gettype',component:   ShowgettypeComponent},
  {path: 'addaction',component:   ShowaddactionComponent},
  {path: 'addrv',component:   ShowaddrendezvousComponent},
  {path: 'getaction',component:   ShowgetactionComponent},
  {path: 'putenfant',component:   ShoweditEnfantComponent}, 
  {path: 'getrv',component:  ShowlistrvComponent},
  {path: 'putrv',component:   ShoweditRendezvousComponent},
  {path: 'home',component:   HomeComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
