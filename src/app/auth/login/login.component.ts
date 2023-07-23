import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = new User
  showRegisterForm: boolean = false

  ngOnInit() {

  }

  loginFormSubmit(loginForm: NgForm) {
    console.log(this.user)
  }

  registerFormSubmit(registerForm: NgForm) {
    console.log(this.user)
  }

}
