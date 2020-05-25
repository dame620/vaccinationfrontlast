import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Enfant } from '../models/enfant';

@Injectable({
  providedIn: 'root'
})
export class EnfantService {

  constructor(private httpClient: HttpClient) { }



  postEnfant(enfant){
   
    return this.httpClient.post<Enfant>(`${environment.apiUrl}/api/enfants`,enfant);
  }



  getEnfant(){
   
    return this.httpClient.get<Enfant>(`${environment.apiUrl}/api/enfants`);
  }
  

}
