import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetconfigService } from './service/getconfig.service';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN, NzMessageService } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { httpInterceptorProviders } from './http-interceptors';
import { AuthService } from './service/auth.service';

registerLocaleData(zh);
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
  ],
  providers: [
    ...httpInterceptorProviders,
    { provide: NZ_I18N, useValue: zh_CN },
    ],
  exports: [
    NgZorroAntdModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
