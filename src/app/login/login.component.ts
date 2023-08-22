import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  headingtxt: string = 'Login';
  subtxt: string = 'ログイン';
  registerOpen: boolean = false;
  loginOk: boolean = false;
  login = {
    email: '',
    password: ''
  };
  register = {
    name: '',
    email: '',
    password: '',
    phone: ''
  }
  onLogin() {
    this.loginOk = true;
    console.log(this.login);
  }
  onRegister() {
    this.registerOpen = false;
    this.headingtxt = 'Login';
    this.subtxt = 'ログイン';
    console.log("registro exitoso");
  }
  loadRegisterForm() {
    this.registerOpen = true;
    this.headingtxt = 'Register';
    this.subtxt = '登録';
  }
  loadLoginForm() {
    this.registerOpen = false;
    this.headingtxt = 'Login';
    this.subtxt = 'ログイン';
  }
}
