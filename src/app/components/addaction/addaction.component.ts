import { Component, OnInit } from '@angular/core';
import { ActionService } from '../../services/action.service';
import { FormGroup, FormControl } from '@angular/forms';
import { TypeService } from '../../services/type.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addaction',
  templateUrl: './addaction.component.html',
  styleUrls: ['./addaction.component.scss']
})
export class AddactionComponent implements OnInit {
  formaddaction:FormGroup;
  rechercheUser;
  types: any;
  constructor(private auth: TypeService, private authaction: ActionService, private router: Router) { }

  ngOnInit(){
    
    this.formaddaction = new FormGroup({
      libelleaction: new FormControl(''),
      type: new FormControl(''),
  });


  this.auth.gettype().subscribe(
    data=>{
      this.types=data["hydra:member"]
      console.log(data["hydra:member"]
      )},
      error=>{
        console.log(error);
      }
  )
}

onAdduser(){
  
  let use={
    libelleaction:this.formaddaction.value.libelleaction,
    type:this.formaddaction.value.type,
    
  };
  /*passage de l'objet user a la methode get connexion le subscribe permet de
   se suscrire a l'evenement click*/
  
  this.authaction.postAction(use).subscribe(
    data=>{
    
      alert("operation reussi avec success");
      console.log(data);
      //localStorage.setItem("token",data.token);
      this.router.navigate(['home']);
    },
    //encas d'eereur on peut recuperer l'eereur comme suit
    error=>{
      alert("echec de l'operation");
      console.log(error);
    }
  )
  }



}
