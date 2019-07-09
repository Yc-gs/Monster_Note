import { Component } from '@angular/core';
import { CacheService } from './service/cache.service';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {
  constructor(private cache: CacheService) {}
  title = 'customer-app';
  ngOnInit(): void {
    // this.cache.set({
    //   key: 'token',
    //   value: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE1NjAzOTU1MzAsImV4cCI6MTU2MDQ4MTkzMCwibmJmIjoxNTYwMzk1NTMwLCJqdGkiOiJ2WjNsTEQ5Q0szN2h6emc0Iiwic3ViIjo2LCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.SQ-NruQFzTel3PYZhnYPAsAqjZoKzi6pkOxQUkzI8Qg'
    // })
  }
}