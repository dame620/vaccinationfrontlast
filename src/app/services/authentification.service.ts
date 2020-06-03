import { environment } from './../../environments/environment';
import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Role } from '../models/role';
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  
  private currentUserSubject: BehaviorSubject<User>;

  constructor(private httpClient: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
  }
//recuperation du curent user value
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
}

  getConnexion(user:User){

return this.httpClient.post<User>(`${environment.apiUrl}/login_check`,user).
pipe(map(user => {
  // store user details and jwt token in local storage to keep user logged in between page refreshes
  localStorage.setItem('currentUser', JSON.stringify(user));
  this.currentUserSubject.next(user);
  return user;
}));

  }


  getRoles(){

    return this.httpClient.get<Role>(`${environment.apiUrl}/api/roles`);

  }

  postUser(user){
   
    return this.httpClient.post<User>(`${environment.apiUrl}/api/users`,user);
  }


  postEnfant(enfant){
   
    return this.httpClient.post<User>(`${environment.apiUrl}/api/users`,enfant);
  }

  //deconnection
  logout(){

    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);

  }
  
}
