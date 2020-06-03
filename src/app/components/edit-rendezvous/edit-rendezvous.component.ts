import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl } from '@angular/forms';
import { RendezvousService } from '../../services/rendezvous.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-rendezvous',
  templateUrl: './edit-rendezvous.component.html',
  styleUrls: ['./edit-rendezvous.component.scss']
})
export class EditRendezvousComponent implements OnInit {

  editrvForm: FormGroup;;
  rendezvous;
  retrait;
  id?:number;
  enfant?:any;
  prenom?:any;
  daterv?:any;
  prenommere?:any
  nommere?:any
  numordre?:any
  libelleaction?:any;
  datenaissance?:any
  taille?:any;
  poid?:any;
  nom?:any;
  oeudeme?:any;
  poidstaille?:any;
  age?:any;
  pb?:any;
  milda?:any;
  iritrans?:any;
  tailleage?:any;
  poidsage?:any
  cherche;
  constructor(private rvser:RendezvousService, private router:Router) { }

  ngOnInit() {
    this.cherche=0;
      this.editrvForm = new FormGroup({
      id: new FormControl(''),
      prenom: new FormControl(''),
      nom: new FormControl(''),
      prenommere: new FormControl(''),
      nommere: new FormControl(''),
      libelleaction:new FormControl(''),
      datenaissance: new FormControl(''),
      daterv: new FormControl(''),
      taille: new FormControl(''),
      poid: new FormControl(''),
      age: new FormControl(''),
      oeudeme: new FormControl(''),
      poidstaille: new FormControl(''),
      tailleage: new FormControl(''),
      poidsage: new FormControl(''),
      pb: new FormControl(''),
      milda: new FormControl(''),
     
    });
    this.existe();
/*
    this.apiService.getEnfantById(+enfantId)
    .subscribe( data => {
      this.enfant = data;
    });
*/
    

}


existe()
{
  this.editrvForm.get('id').valueChanges.subscribe(val=>
    {

    this.rvser.getRvById(val).subscribe(
    data=>
    {
      console.log(this.retrait=data);
      if(data)
      {

        this.iritrans=(data.id);
        this.prenom = data.enfant.prenom;
        this.nom = data.enfant.nom;

        this.prenommere = data.enfant.prenommere;
        this.nommere = data.enfant.nommere;
        this.datenaissance = data.enfant.datenaissance;
        this.daterv = data.daterv;
        this.libelleaction = data.action.libelleaction;

        this.editrvForm.get('prenom').disable();
        this.editrvForm.get('nom').disable();
        this.editrvForm.get('prenommere').disable();
        this.editrvForm.get('nommere').disable();
        this.editrvForm.get('datenaissance').disable();
        this.editrvForm.get('daterv').disable();
        this.editrvForm.get('libelleaction').disable();
       
       this.cherche=0;

      }


    })

      }

  );

}

onSubmit() {
  if(this.cherche == 0){
    let enregisrv={

      id:this.iritrans, 
      poid:this.editrvForm.value.poid,
      taille:this.editrvForm.value.taille,
      oeudeme:this.editrvForm.value.oeudeme,
      poidstaille:this.editrvForm.value.poidstaille,
      tailleage:this.editrvForm.value.tailleage,
      poidsage:this.editrvForm.value.poidsage,
      age:this.editrvForm.value.age,
      milda:this.editrvForm.value.milda,
      pb:this.editrvForm.value.pb,

   
      
    };

    
  

    this.rvser.putRendezvous(enregisrv).subscribe(
    data=>{
      alert("ajout reussi avec success");
      console.log(data);
      //localStorage.setItem("token",data.token);
      this.router.navigate(['getrv']);
    },
    //encas d'eereur on peut recuperer l'eereur comme suit
    error=>{
      console.log(error);
      alert(error);
    }
  )


    
    

  }


}



}
