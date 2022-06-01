import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-deconnexion',
  templateUrl: './deconnexion.component.html',
  styleUrls: ['./deconnexion.component.sass'],
})
export class DeconnexionComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.disconnect();
  }

  disconnect() {
    this.auth.disconnectUser();
  }
}
