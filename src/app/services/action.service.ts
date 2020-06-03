import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Action } from '../models/action';

@Injectable({
  providedIn: 'root'
})
export class ActionService {
  constructor(private httpClient: HttpClient) { }



  postAction(action){
   
    return this.httpClient.post<Action>(`${environment.apiUrl}/api/actions`,action);
  }

  getAction(){
   
    return this.httpClient.get<Action>(`${environment.apiUrl}/api/actions`);
  }
}
