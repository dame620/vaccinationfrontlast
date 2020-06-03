import { Component, OnInit } from '@angular/core';
import { RendezvousService } from '../../services/rendezvous.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listrv',
  templateUrl: './listrv.component.html',
  styleUrls: ['./listrv.component.scss']
})
export class ListrvComponent implements OnInit {

  rendezvouses;
  rechercheRv;
  constructor(private auth: RendezvousService,private router: Router) { }

  ngOnInit() {
    if(!localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return; 
    }

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
        alert('echec');
        console.log(error);
      }
  )

}

}
