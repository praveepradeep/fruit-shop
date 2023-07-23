import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  isLoggedIn() {
    return !!localStorage.getItem('token')
  }
  setLoggedUser(token: string) {
    return localStorage.setItem('token', token)
  }
  login() {
    this.router.navigate(['/login'])
  }
}
