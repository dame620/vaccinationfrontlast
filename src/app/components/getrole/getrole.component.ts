import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../../services/authentification.service';

@Component({
  selector: 'app-getrole',
  templateUrl: './getrole.component.html',
  styleUrls: ['./getrole.component.scss']
})
export class GetroleComponent implements OnInit {
  roles;
  constructor(private auth: AuthentificationService) { }

  ngOnInit() {

  this.auth.getRoles().subscribe(
    data=>{
      this.roles=data["hydra:member"]
      console.log(data["hydra:member"]
      )},
      error=>{
        alert('Veuillez vous authentifiez');
        console.log(error);
      }
  )

}

ongetRoles(){
  this.auth.getRoles().subscribe(
    data=>{
      this.roles=data["hydra:member"]
      console.log(data["hydra:member"]
      )},
      error=>{
        alert('Veuillez vous authentifiez');
        console.log(error);
      }
  )
}


}
