import { Component, OnInit } from '@angular/core';
import { EnfantService } from 'src/app/services/enfant.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addenfant',
  templateUrl: './addenfant.component.html',
  styleUrls: ['./addenfant.component.scss']
})
export class AddenfantComponent implements OnInit {
  formaddenfant:FormGroup;
  constructor(private auth: EnfantService, private router: Router) { }

  ngOnInit(){

    this.formaddenfant = new FormGroup({
      prenom: new FormControl(''),
      nom: new FormControl(''),
      prenommere: new FormControl(''),
      nommere: new FormControl(''),
      adresse: new FormControl(''),
      numetatcivil: new FormControl(''),
      telmere: new FormControl(''),
      datenaissance: new FormControl(''),
      numordre: new FormControl(''),
      nomchefquartier: new FormControl(''),
      telchefquartier: new FormControl(''),
      telbadiennegokh: new FormControl(''),
      etatentree: new FormControl(''),
      etatsortie: new FormControl(''),
      motifsortie: new FormControl(''),
      prenombadienegokh: new FormControl(''),
      nombadienegokh: new FormControl(''),
      sexe: new FormControl(''),
      prenomchefquartier: new FormControl(''),
      telpere: new FormControl(''),
      numvilla: new FormControl(''),

      
      
  });
  console.log(this.formaddenfant.value.premom);

  }

  onAddEnfant(){
    let enfant={
     
      prenom: this.formaddenfant.value.prenom,
      nom: this.formaddenfant.value.nom,
      prenommere: this.formaddenfant.value.prenommere,
      nommere: this.formaddenfant.value.nommere,
      adresse:this.formaddenfant.value.adresse,
      numetatcivil:this.formaddenfant.value.numetatcivil,
      telmere:this.formaddenfant.value.telmere,
      datenaissance: this.formaddenfant.value.datenaissance,
      numordre: this.formaddenfant.value.numordre,
      nomchefquartier: this.formaddenfant.value.nomchefquartier,
      telchefquartier: this.formaddenfant.value.telchefquartier,
      telbadiennegokh: this.formaddenfant.value.telbadiennegokh,
      etatentree: this.formaddenfant.value.etatentree,
      etatsortie: this.formaddenfant.value.etatsortie,
      motifsortie: this.formaddenfant.value.motifsortie,
      prenombadienegokh: this.formaddenfant.value.prenombadienegokh,
      nombadienegokh: this.formaddenfant.value.nombadienegokh,
      sexe: this.formaddenfant.value.sexe,
      prenomchefquartier: this.formaddenfant.value.prenomchefquartier,
      telpere: this.formaddenfant.value.telpere,
      numvilla: this.formaddenfant.value.numvilla
      
    };
    /*passage de l'objet user a la methode get connexion le subscribe permet de
     se suscrire a l'evenement click*/
    
    this.auth.postEnfant(enfant).subscribe(
      data=>{
        alert("operation reussi avec success");
      console.log(data);
      //localStorage.setItem("token",data.token);
      this.router.navigate(['home']);
      },
      //encas d'eereur on peut recuperer l'eereur comme suit
      error=>{
        alert("Echec de l'operation");
        console.log(error);
      }
    )
   

  }

}
