import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  valider(firstname: string, email: string) {
    if (firstname === '') {
      alert('le champs Nom utilisateur ne doit pas etre vide ');
    } else if (email === '') {
      alert('le champs Email ne doit etre vide');
    } else {
      this.router.navigate(['navbar']);
    }
  }
}
