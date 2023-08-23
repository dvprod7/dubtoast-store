import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.registerOpen = params['form'] === 'register';
    });
  }

  constructor(private router: Router, private route: ActivatedRoute) { }

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
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { form: 'login' },
      queryParamsHandling: 'merge'
    });
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
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { form: 'register' },
      queryParamsHandling: 'merge'
    });
  }
  loadLoginForm() {
    this.registerOpen = false;
    this.headingtxt = 'Login';
    this.subtxt = 'ログイン';
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { form: 'login' },
      queryParamsHandling: 'merge'
    });
  }
}
