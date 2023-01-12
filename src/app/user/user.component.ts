// ANGULAR IMPORTS
import { Component, OnInit } from '@angular/core';

// DATA IMPORTS
import { DEVELOPER_LEVEL, UserModel } from '../helper/data';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  // helper - for displaying the enum options in the dropdown
  devLevels = Object.values(DEVELOPER_LEVEL).map(level => level.toString());

  // data model
  user: UserModel;

  // setter funcs
  devLevelSelected($event: { value: string }) {
    console.log($event.value);
    this.user.devLevel = DEVELOPER_LEVEL[$event.value.toUpperCase()];
  };

  constructor() { }

  ngOnInit(): void {
    this.user = {
      userName: 'danielv',
      firstName: 'Daniel',
      lastName: 'Varga',
      email: 'varga.viktor.daniel@gmail.com',
      devLevel: DEVELOPER_LEVEL.MEDIOR,
      about: 'Coder and gamer',
    };
  }

  onSave() {
    console.log('Entered Data: ', this.user);
  }

  
  
}
