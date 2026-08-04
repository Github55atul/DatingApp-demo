import { Component, inject, signal } from '@angular/core';
import { AccountService } from '../../core/services/account-service';
import { FormsModule } from '@angular/forms';

import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { NotificationService } from '../../core/services/notification';

@Component({
  selector: 'app-nav',
  imports: [FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  protected accountService=inject(AccountService);
  private notification = inject(NotificationService);

  protected router=inject(Router);
  

  protected creds:any={};

 

login() {
  this.accountService.login(this.creds).subscribe({
    next: result => {

      this.notification.success('Login Successfully');

      this.router.navigateByUrl('/members');

      this.creds = {};
    },

    error: error => {

      this.notification.error(error.error || 'Invalid Username or Password');

    }
  });
}

  logout()
  {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
}
