import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/_models/User';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentUser$: Observable<User | null> = of(null)
  constructor(public accountService: AccountService, private router: Router) { }


  ngOnInit(): void {
    this.currentUser$ = this.accountService.currentUser$;
  }

  goToDashboard() {
    this.router.navigateByUrl("admin/dashboard")
  }

  logout() {
    this.accountService.logout()
  }
}
