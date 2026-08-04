import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { catchError, lastValueFrom } from 'rxjs';
import { Nav } from "../layout/nav/nav";
import { AccountService } from '../core/services/account-service';
import { Home } from "../features/home/home";
import { User } from '../types/user';

@Component({
  selector: 'app-root',
  imports: [Nav,  RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  // private http=inject(HttpClient);

  // private accountService=inject(AccountService);
  // protected readonly title = signal('DattingApp');
  // protected members=signal<User[]>([]);
  protected router=inject(Router);

  

  async ngOnInit(){
    // this.members.set(await this.getmembers())
    // this.setCurrentUser();
  }

  // setCurrentUser()
  // {
  //   const userString=localStorage.getItem('user');
  //   if(!userString) return;
  //   const user=JSON.parse(userString);
  //   this.accountService.currentUser.set(user);
  // }
  //  async getmembers()
  // {
  //   try{
  //     return lastValueFrom( this.http.get<User[]>('https://localhost:5001/api/members'));

  //   }
  //   catch(error)
  //   {
  //     console.log(error);
  //     throw error;
  //   }
   
  // }

}
