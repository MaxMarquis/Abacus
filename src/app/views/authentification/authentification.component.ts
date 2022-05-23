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
    if (email === '')  {
      alert('les champs "Email" et "Mot de passe" ne doivent pas etre vides');
      return
    }
    if(email){
      this.validateEmail(email);
    } 
    if (password === '') {
      alert('Vous devez entrer un mot de passe aussi!!!');
    }
    else {
      this.router.navigateByUrl('/tableauDeBord')
    }
  }

  validateEmail(email: string) {
    var format = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.match(format)){
      return (true);
    }
    else {
      alert("L'adresse Email est incorrect. le format doit est : 'NomEmail@serveurmessagerie.domaine' !");
      return
    }
  }
}

