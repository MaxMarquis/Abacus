import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registe',
  templateUrl: './registe.component.html',
  styleUrls: ['./registe.component.sass']
})
export class RegisteComponent implements OnInit {

  registerUserData = 
  {'email': '',
  'username':'',
  'password': ''
 }

  constructor(private authService: AuthService) { }


  ngOnInit(): void {
  }
    registerUser() {
        this.authService.registreUser(this.registerUserData)
        
        
    }
}
