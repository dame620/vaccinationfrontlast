import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Type } from '../models/type';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  constructor(private httpClient: HttpClient) { }



  gettype(){
   
    return this.httpClient.get<Type>(`${environment.apiUrl}/api/types`);
  }
}
