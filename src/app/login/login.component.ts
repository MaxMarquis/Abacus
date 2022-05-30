import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  
    loginUserData = 
    {'email': '',
    'username':'',
    'password': ''
   }


  constructor(private authService : AuthService, private router: Router) { }

  redirectToDashboard() {
    this.router.navigate(["/tableauDeBord"]);
  }

  ngOnInit(): void {
    this.authService.checkIfUserIsConnected(this.redirectToDashboard.bind(this));
  }


    loginUser(){
      this.authService.loginUser(this.loginUserData, this.redirectToDashboard.bind(this))
    }

   
    



}
