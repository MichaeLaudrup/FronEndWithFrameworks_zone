import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoomRoutingModule } from './store-room-routing.module';
import { StoreLayoutComponent } from './main-store/store-layout.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    StoreLayoutComponent
  ],
  imports: [
    CommonModule,
    StoreRoomRoutingModule,
    SharedModule
  ]
})
export class StoreRoomModule { }
