import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AccountService } from '../services/account-service';
import { NotificationService } from '../services/notification';

export const authGuard: CanActivateFn = () => {
  const accountService=inject(AccountService);
   const notification = inject(NotificationService);

   if(accountService.currentUser()) return true;
   else{
    notification.error('you shall not pass');
    return false;
    ;
    
   }

};
