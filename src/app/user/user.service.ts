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

  setUser(userName:string, 
    firstName:string, 
    lastName:string, 
    email:string, 
    devLevel:DEVELOPER_LEVEL, 
    about:string
  ) {
    this.user.userName = userName;
    this.user.firstName = firstName;
    this.user.lastName = lastName;
    this.user.email = email;
    this.user.devLevel = devLevel;
    this.user.about = about;
  }

  login() {
    this.setUser('danielv',
      'Daniel',
      'Varga',
      'varga.viktor.daniel@gmail.com',
      DEVELOPER_LEVEL.MEDIOR,
      'Coder and gamer'
    );

    console.log('Login in service');
  }

  logout() {
    this.setUser('',
      '',
      '',
      '',
      DEVELOPER_LEVEL.MEDIOR,
      ''
    );

    console.log('Logout in service');
  }

  isLoggedIn() {
    return this.user != null;
  }
  
}