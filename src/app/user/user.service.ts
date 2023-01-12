// ANGULAR IMPORTS
import { Injectable } from "@angular/core";

// DATA IMPORTS
import { DEVELOPER_LEVEL, UserModel } from "../helper/data";

@Injectable()
export class UserService {
  user: UserModel = {
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    devLevel: DEVELOPER_LEVEL.MEDIOR,
    about: '',
  };

  login() {
    this.user.userName = 'danielv';
    this.user.firstName = 'Daniel';
    this.user.lastName = 'Varga';
    this.user.email = 'varga.viktor.daniel@gmail.com';
    this.user.devLevel = DEVELOPER_LEVEL.MEDIOR;
    this.user.about = 'Coder and gamer';

    console.log('Login in service');
  }
  logout() {
    this.user.userName = '';
    this.user.firstName = '';
    this.user.lastName = '';
    this.user.email = '';
    this.user.devLevel = DEVELOPER_LEVEL.MEDIOR;
    this.user.about = '';

    console.log('Logout in service');
  }
  isLoggedIn() {
    return this.user != null;
  }
}