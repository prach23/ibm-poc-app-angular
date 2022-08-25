import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private myRoute: Router) { }
  // isAuthenticate: boolean=false;
  // user = new BehaviorSubject<string>("");
  // password = new BehaviorSubject<string>("");
  // login(user:string, password:string):Observable<boolean>{
  //   if(user==='admin' && password==='admin@123'){
  //     this.isAuthenticate= true;
  //     return of(true);
  //   }
  //   return of(false);
  // }

  sendToken(token: string) {
    localStorage.setItem("LoggedInUser", token) //here it is the password
  }
  getToken() {
    return localStorage.getItem("LoggedInUser")
  }
  isLoggednIn() {
    return this.getToken() !== null;
  }
  logout() {
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem("LoggedInUser");
    this.myRoute.navigate(["login"]);
  }

  // logout(): void {
  //   localStorage.setItem('isLoggedIn', 'false');
  //   localStorage.removeItem('token');
  // }

  // constructor() { }
}
