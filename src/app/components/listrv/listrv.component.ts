import { Component, OnInit } from '@angular/core';
import { RendezvousService } from '../../services/rendezvous.service';
import { Router } from '@angular/router';
import { Rendezvous } from '../../models/rendezvous';

@Component({
  selector: 'app-listrv',
  templateUrl: './listrv.component.html',
  styleUrls: ['./listrv.component.scss']
})
export class ListrvComponent implements OnInit {
  rv:Rendezvous[];
  rendezvouses;
  rechercheRv;
  rechercheetatRv;
  constructor(private auth: RendezvousService,private router: Router) { }

  ngOnInit() {
   /* if(!localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return; 
    }*/

  this.auth.getListrv().subscribe(
    data=>{
      this.rendezvouses=data["hydra:member"]
      console.log(data["hydra:member"]
      )},
      error=>{
        alert('echec');
        console.log(error);
      }
  )

}

ongetListeRv(){
  
  this.auth.getListrv().subscribe(
    data=>{
      this.rendezvouses=data["hydra:member"]
      console.log(data["hydra:member"]
      )},
      error=>{
        alert("echec de l'operation");
        console.log(error);
      }
  )

}

editRendezvous(rv:Rendezvous): void{
  localStorage.removeItem("editrvId");
  localStorage.setItem("editrvId", rv.id.toString());
  this.router.navigate(['putrv']);
};

}
