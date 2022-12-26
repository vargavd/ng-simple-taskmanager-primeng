import { Component, OnInit } from '@angular/core';

// PRIME IMPORTS
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  buttonLabel: string = 'CLICK HERE!';

  // account properties
  userMenu: MenuItem[];
  loggedIn: boolean;

  ngOnInit(): void {
    this.userMenu = [
      { label: 'Login', icon: 'pi pi-sign-in', command: () => console.log('Login') },
      { label: 'Logout', icon: 'pi pi-sign-out', command: () => console.log('Logout') },
      { label: 'Settings', icon: 'pi pi-cog', routerLink: ['/user-settings'] }
    ];

    this.loggedIn = false;
  }

  // for debugging
  console = console;
}
