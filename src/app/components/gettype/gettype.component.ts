import { Component, OnInit } from '@angular/core';
import { TypeService } from 'src/app/services/type.service';

@Component({
  selector: 'app-gettype',
  templateUrl: './gettype.component.html',
  styleUrls: ['./gettype.component.scss']
})
export class GettypeComponent implements OnInit {
  types;
  constructor(private auth: TypeService) { }

  ngOnInit() {

  this.auth.gettype().subscribe(
    data=>{
      this.types=data["hydra:member"]
      console.log(data["hydra:member"]
      )},
      error=>{
        alert('Veuillez vous authentifiez');
        console.log(error);
      }
  )

}

ongetTypes(){
  
  this.auth.gettype().subscribe(
    data=>{
      this.types=data["hydra:member"]
      console.log(data["hydra:member"]
      )},
      error=>{
        alert('Veuillez vous authentifiez');
        console.log(error);
      }
  )
}


}
