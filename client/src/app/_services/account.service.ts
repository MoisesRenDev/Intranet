import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { User } from '../_models/User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl: string = "http://localhost:5021/api/";
  private currentUserSource = new BehaviorSubject<User | null>(null)
  currentUser$ = this.currentUserSource.asObservable()

  constructor(private http: HttpClient, private router: Router) { }

  login(model: any) {
    return this.http.post<User>(this.baseUrl + "account/login", model).pipe(
      map((response: User) => {
        const user = response;
        if (user) {
          localStorage.setItem('user', JSON.stringify(user))
          this.currentUserSource.next(user)
        }
      })
    )
  }

  setCurrentUser(user: User) {
    this.currentUserSource.next(user)
  }

  logout() {
    localStorage.removeItem("user");
    this.currentUserSource.next(null)
    this.router.navigateByUrl("/")
  }
}
