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
  
  getEnfantById(id: number) {
    return this.httpClient.get<Enfant>(`${environment.apiUrl}/api/enfants/${id}`);
  }

  putEnfant(enfant:Enfant) {
    return this.httpClient.put<Enfant>(`${environment.apiUrl}/api/enfants/${enfant.id}`, enfant);
  }
  
  getenfrv(numordre){
    
    return this.httpClient.get<Enfant>(`${environment.apiUrl}/api/enfants?numordre=${numordre}`);
  }


}
