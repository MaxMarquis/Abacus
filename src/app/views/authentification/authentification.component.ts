import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.sass']
})
export class AuthentificationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void { }

  valider(password: string, email: string) {
    if ((password === '')&&(email === "")){
      alert('Il faut entrer votre Email et votre mot de passe pour vous connecter');
    } else if (email === '') {
      alert('le champs Email ne doit pas etre vide');
    } 
    else if (password === '') {
      alert('Vous devez entrer le mot de passe ou alors le mot de passe est incorrect ');
    }
    else {
      this.router.navigateByUrl('/tableauDeBord')
    }
  }
}

