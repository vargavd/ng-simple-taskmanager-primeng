// ANGULAR IMPORTS
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// PRIME IMPORTS
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // account properties
  userMenu: MenuItem[];
  loggedIn: boolean;

  constructor(private router: Router) { }

  // INIT
  ngOnInit(): void {
    this.userMenu = [
      { label: 'Profile', icon: 'pi pi-info-circle', routerLink: ['/user'] },
      { label: 'My Tasks', icon: 'pi pi-list', routerLink: ['/user/tasks'] },
      { label: 'Settings', icon: 'pi pi-cog', routerLink: ['/user/settings'] },
      { separator: true },
      { label: 'Logout', icon: 'pi pi-sign-out', command: () => this.loggedIn = false },
    ];

    this.loggedIn = false;
  }

  // EVENTS
  clickOnLink(path: string) {
    this.router.navigate([path]);
  }

  // for debugging
  console = console;
}
