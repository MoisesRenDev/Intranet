import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {}

  constructor(private accountService: AccountService, private router: Router) { }
  
  ngOnInit(): void {
    this.getCurrentUser()
  }

  getCurrentUser() {
    this.accountService.currentUser$.subscribe({
      next: user => {
        if (user) this.router.navigateByUrl("/")
      },
      error: (error) => console.log(error),
      complete: () => console.log("Request complete")
    })
  }

  login() {
    this.accountService.login(this.model).subscribe({
      next: ((request) => {
        this.router.navigateByUrl("/admin/dashboard")
      }),
      error: error => console.log(error),
      complete: () => console.log("Request complete")
    })
  }

}
