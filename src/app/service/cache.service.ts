import { Injectable } from '@angular/core';

interface Storage {
  key: string,
  value: any
}

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  localStorage: any
  constructor() { }
  set(obj: Storage): void {
    localStorage.setItem(obj.key, JSON.stringify(obj.value));
  }
  get(key: string): any {
    return JSON.parse(localStorage.getItem(key))
  }
  remove(key: string): void {
    localStorage.removeItem(key)
  }
}
