import { Injectable } from '@angular/core';
import { CacheService } from './cache.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  get isLoggedIn() {
    return this.isLogin()
  }
  
  redirectUrl: string
  constructor(private cache: CacheService) { }

  getAuthorizationToken() {
    const token = this.cache.get('token')
    return token
  }
  setAuthorizationToken(token: string) {
    this.cache.set({
      key: 'token',
      value: 'Bearer ' + token
    })
  }
  clear() {
    this.cache.set({
      key: 'token',
      value: ''
    })
  }

  isLogin() {
    // if (this.getAuthorizationToken()) return true
    // return false
    return true
  }
}
