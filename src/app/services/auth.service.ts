import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserCredentials, UserDTO, User } from '../interface/auth';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private registreURL =
    'https://my-temp-project-cd6d4j.can.canonic.dev/api/users/signupWithPassword';
  private loginUrl =
    'https://my-temp-project-cd6d4j.can.canonic.dev/api/users/loginWithPassword';
  private readonly refreshUserUrl =
    'https://my-temp-project-cd6d4j.can.canonic.dev/api/users/authenticate';

  private readonly storage = sessionStorage;
  private readonly key = 'user';

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {}

  private getUserFromStorage() {
    const userRaw = this.storage.getItem(this.key);

    if (!userRaw) return;

    return JSON.parse(userRaw) as User;
  }

  isAuthenticated() {
    const userRaw = this.storage.getItem(this.key);

    if (!userRaw) return false;

    const user: User = JSON.parse(userRaw);

    return !this.jwtHelper.isTokenExpired(user.token);
  }

  storeUser({
    data: {
      token,
      user: { email, username, _id },
    },
  }: UserDTO) {
    const newUser: User = {
      token,
      email,
      username,
      _id,
    };

    this.storage.setItem(this.key, JSON.stringify(newUser));
  }

  checkIfUserIsConnected(onRefreshedUser?: () => void) {
    try {
      const user = this.getUserFromStorage();

      if (!user) return;

      this.isAuthenticated() && this.refreshUser(user.token, onRefreshedUser);
    } catch (e) {
      const error = e as Error;

      console.error(error.message);
    }
  }

  registreUser(user: UserCredentials, onUserRegistered?: () => void) {
    this.http.post<UserDTO>(this.registreURL, user).subscribe((user) => {
      console.log(user);
      this.storeUser(user);

      onUserRegistered && onUserRegistered();
    });
  }

  loginUser(user: UserCredentials, onUserLoggedIn?: () => void) {
    this.http.post<UserDTO>(this.loginUrl, user).subscribe((user) => {
      console.log(user);
      this.storeUser(user);

      onUserLoggedIn && onUserLoggedIn();
    });
  }

  refreshUser(token: string, onUserRefreshed?: () => void) {
    this.http
      .post<UserDTO>(this.refreshUserUrl, { token: token })
      .subscribe((user) => {
        this.storeUser(user);

        onUserRefreshed && onUserRefreshed();
      });
  }

  disconnectUser(onUserDisconnected?: () => void) {
    this.storage.removeItem(this.key);

    onUserDisconnected && onUserDisconnected();
  }
}
