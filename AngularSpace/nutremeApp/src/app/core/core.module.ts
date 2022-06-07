import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './store/core.reducer';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    LoginRegisterComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    HttpClientModule,
    StoreModule.forFeature('user', userReducer),
  ]
})
export class CoreModule { }
