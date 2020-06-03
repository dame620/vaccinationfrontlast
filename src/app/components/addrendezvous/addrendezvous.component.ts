import { Component, OnInit } from '@angular/core';
import { RendezvousService } from '../../services/rendezvous.service';
import { ActionService } from '../../services/action.service';
import { FormGroup, FormControl } from '@angular/forms';
import { EnfantService } from '../../services/enfant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addrendezvous',
  templateUrl: './addrendezvous.component.html',
  styleUrls: ['./addrendezvous.component.scss']
})
export class AddrendezvousComponent implements OnInit {
  formaddrv:FormGroup;
  cherche;
  comptesnew: any;
  compte: any;
  irienf: any;
  comptesold: any;
  numordre: any;
  prenom: any;
  nom: any
  enfant?:any;
  action?:any;
  daterv?:any;
  prenommere?: any;
  nommere?: any;
  numetatcivil?:any;
  datenaissance?:any;
  actions;
  constructor(private auth: RendezvousService,private actionser: ActionService, private enfatser: EnfantService, private router:Router) { }

  ngOnInit() {
    this.cherche=0;

    this.formaddrv = new FormGroup({
      prenom: new FormControl(''),
      nom: new FormControl(''),
      numordre: new FormControl(''),
      action: new FormControl(''),
      daterv: new FormControl(''),
      prenommere: new FormControl(''),
      nommere: new FormControl(''),
      numetatcivil: new FormControl(''),
      datenaissance: new FormControl(''),
  });

  this.existe();
  this.actionser.getAction().subscribe(
    data=>{
      this.actions=data["hydra:member"]
      console.log(data["hydra:member"]
      )},
      error=>{
        alert('echec operation');
        console.log(error);
      }
  )

  }


  existe()
    {
      this.formaddrv.get('numordre').valueChanges.subscribe(val=>
        {
  
        this.enfatser.getenfrv(val).subscribe(
        data=>
        {
          console.log(this.compte=data["hydra:member"]);
          if(data["hydra:member"][0])
          {

            this.irienf=(data["hydra:member"][0].id);
            this.nom = data["hydra:member"][0].nom;
            this.prenom = data["hydra:member"][0].prenom;
            this.nommere = data["hydra:member"][0].nommere;
            this.prenommere = data["hydra:member"][0].prenommere;
            this.numetatcivil = data["hydra:member"][0].numetatcivil;
            this.datenaissance = data["hydra:member"][0].datenaissance,

            this.formaddrv.get('nom').disable();
            this.formaddrv.get('prenom').disable();
            this.formaddrv.get('nommere').disable();
            this.formaddrv.get('prenommere').disable();
            this.formaddrv.get('numetatcivil').disable();
            this.formaddrv.get('datenaissance').disable();
           this.cherche=0;
  
          }
          
  
  
        })
  
          }
  
      );
  
    }

    onaddrv(){

    if(this.cherche ==0 ){
/*
      let comptesold = {} as Rendezvous;
    
      comptesold.enfant = this.irienf;
     // comptesold.action=this.formaddrv.value.action;
      comptesold.daterv=this.formaddrv.value.daterv;
      console.log(comptesold);
*/
     let comptesold={
      "enfant": {
        id:this.irienf
      },
     "action":this.formaddrv.value.action,
     // "user": "string",
      "daterv":this.formaddrv.value.daterv,
     // "etatrv": true
    }




     this.auth.postRv(comptesold).subscribe(
      data=>{
        alert("operation reussi avec success");
        console.log(data);
        //localStorage.setItem("token",data.token);
       this.router.navigate(['getrv']);
      },
      //encas d'eereur on peut recuperer l'eereur comme suit
      error=>{
        alert("echec de l'operation");
        console.log(error);
      }
    )

     }
    }

}
