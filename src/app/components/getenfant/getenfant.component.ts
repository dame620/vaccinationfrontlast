import { Component, OnInit } from '@angular/core';
import { EnfantService } from 'src/app/services/enfant.service';

@Component({
  selector: 'app-getenfant',
  templateUrl: './getenfant.component.html',
  styleUrls: ['./getenfant.component.scss']
})
export class GetenfantComponent implements OnInit {

  getenfants;
  constructor(private auth: EnfantService) { }
  ngOnInit() {
    
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

}
