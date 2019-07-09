import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { GetconfigService } from 'src/app/service/getconfig.service';
import {  Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { LOGIN } from './login-api'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  validateForm: FormGroup;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    const { email, pwd } = this.validateForm.value
    const payload = { email, pwd }
    this.getConfig.get(LOGIN, payload).subscribe((res: any) => {
      if(res.success) {
        console.log(res)
        const token = res.data.token
        this.auth.setAuthorizationToken(token)
        let url = '/default'
        if(this.auth.redirectUrl) url = this.auth.redirectUrl
        this.router.navigate([url])
      }
    })
  }

  constructor(
    private fb: FormBuilder,
    private getConfig: GetconfigService,
    private router: Router,
    private auth: AuthService
    ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required]],
      pwd: [null, [Validators.required]],
      remember: [true]
    });
  }

}
