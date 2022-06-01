import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'auth-on-visibility',
  templateUrl: './auth-on-visibility.component.html',
  styleUrls: ['./auth-on-visibility.component.sass'],
})
export class AuthOnVisibilityComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  routesArray = ['login', 'registe', 'deconnexion'];

  onTabVisibilityChange() {
    if (document.visibilityState === 'visible') {
      if (this.routesArray.some((route) => this.router.url.includes(route)))
        return;

      if (!this.auth.isAuthenticated()) {
        this.router.navigate(['/login']);
      }
    }
  }

  ngOnInit(): void {
    window.addEventListener(
      'visibilitychange',
      this.onTabVisibilityChange.bind(this)
    );
  }
}
