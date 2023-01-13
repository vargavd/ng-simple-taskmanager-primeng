// ANGULAR IMPORTS
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// PRIME IMPORTS
import { MenuItem } from 'primeng/api';

// CUSTOM SERVICES
import { UserService } from '../user/user.service';

// DATA IMPORTS
import { UserModel } from '../helper/data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // account properties
  userMenu: MenuItem[];
  user: UserModel;

  constructor(
    private router: Router, 
    private userService: UserService
  ) {}

  // private funcs
  private clickOnLogout() {
    this.userService.logout();

    if (window.location.pathname === '/user') {
      this.router.navigate(['/']);
    }
  }

  // INIT
  ngOnInit(): void {
    this.userMenu = [
      { label: 'Profile', icon: 'pi pi-info-circle', routerLink: ['/user'] },
      { label: 'My Tasks', icon: 'pi pi-list', routerLink: ['/user/tasks'] },
      { label: 'Settings', icon: 'pi pi-cog', routerLink: ['/user/settings'] },
      { separator: true },
      { label: 'Logout', icon: 'pi pi-sign-out', command: this.clickOnLogout.bind(this) },
    ];

    this.user = this.userService.user;
  }

  // DOM events
  clickOnLink(path: string) {
    this.router.navigate([path]);
  }
  clickOnLogin() {
    this.userService.login();
  }

  // for debugging
  console = console;
}
