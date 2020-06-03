import { Component, OnInit } from '@angular/core';
import { ActionService } from '../../services/action.service';

@Component({
  selector: 'app-getaction',
  templateUrl: './getaction.component.html',
  styleUrls: ['./getaction.component.scss']
})
export class GetactionComponent implements OnInit {

  actions;
  constructor(private auth: ActionService) { }

  ngOnInit() {

  this.auth.getAction().subscribe(
    data=>{
      this.actions=data["hydra:member"]
      console.log(data["hydra:member"]
      )},
      error=>{
        alert('Veuillez vous authentifiez');
        console.log(error);
      }
  )

}

ongetAction(){
  
  this.auth.getAction().subscribe(
    data=>{
      this.actions=data["hydra:member"]
      console.log(data["hydra:member"]
      )},
      error=>{
        alert('Veuillez vous authentifiez');
        console.log(error);
      }
  )
}



}
