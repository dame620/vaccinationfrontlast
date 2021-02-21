import { Component, OnInit } from '@angular/core';
import { EnfantService } from 'src/app/services/enfant.service';
import { Enfant } from '../../models/enfant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getenfant',
  templateUrl: './getenfant.component.html',
  styleUrls: ['./getenfant.component.scss']
})
export class GetenfantComponent implements OnInit {
  enfant:Enfant[];
  getenfants;
  rechercheUser;
  constructor(private auth: EnfantService,private router:Router) { }
  ngOnInit() {

    /*if(!localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return; 
    }*/
    
    this.auth.getEnfant().subscribe(
      data=>{
        this.getenfants=data["hydra:member"]
        console.log(data["hydra:member"]
        )},
        error=>{
          alert('Veuillez vous authentifiez');
          console.log(error);
        }
    )
  }

  ongetListeenfants(){
    this.auth.getEnfant().subscribe(
      data=>{
        this.getenfants=data["hydra:member"]
        console.log(data["hydra:member"]
        )},
        error=>{
          alert('Veuillez vous authentifiez');
          console.log(error);
        }
    )
  }

  editEnfant(enfant:Enfant): void{
    localStorage.removeItem("editEnfantId");
    localStorage.setItem("editEnfantId", enfant.id.toString());
    this.router.navigate(['putenfant']);
  };

}
