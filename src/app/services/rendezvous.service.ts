import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rendezvous } from '../models/rendezvous';

@Injectable({
  providedIn: 'root'
})
export class RendezvousService {
  constructor(private httpClient: HttpClient) { }



  postRv(rv){
   
    return this.httpClient.post<Rendezvous>(`${environment.apiUrl}/api/rendezvouses`, rv);
  }

   //get la liste des rv
   getListrv(){
   
    return this.httpClient.get<Rendezvous>(`${environment.apiUrl}/api/rendezvouses`);
  }

  getRvById(id: number) {
    return this.httpClient.get<Rendezvous>(`${environment.apiUrl}/api/rendezvouses/${id}`);
  }

 

  putRendezvous(rendousvous:Rendezvous) {
    return this.httpClient.put<Rendezvous>(`${environment.apiUrl}/api/rendezvouses/${rendousvous.id}`, rendousvous);
  }
  
}
