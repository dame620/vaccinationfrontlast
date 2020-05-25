import { ConnexionComponent } from './pages/connexion/connexion.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowadduserComponent } from './pages/showadduser/showadduser.component';
import { ShowgetroleComponent } from './pages/showgetrole/showgetrole.component';
import { GetaddenfantComponent } from './pages/getaddenfant/getaddenfant.component';
import { ShowgetenfantComponent } from './pages/showgetenfant/showgetenfant.component';
import { ShowgettypeComponent } from './pages/showgettype/showgettype.component';


const routes: Routes = [
  {path:'login',component: ConnexionComponent},
  {path:'adduser',component: ShowadduserComponent},
  {path: 'getrole',component:  ShowgetroleComponent},
  {path: 'addenfant',component:  GetaddenfantComponent},
  {path: 'getenfant',component:   ShowgetenfantComponent},
  {path: 'gettype',component:   ShowgettypeComponent},
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
