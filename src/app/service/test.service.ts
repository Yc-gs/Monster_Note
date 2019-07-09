import { Injectable } from '@angular/core';
import { GetconfigService } from './getconfig.service';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(
    private getConfig: GetconfigService
  ) { }
  getTest() {
    return this.getConfig.getString()
  }
}
