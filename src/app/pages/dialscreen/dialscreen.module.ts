import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DialscreenPageRoutingModule } from './dialscreen-routing.module';

import { DialscreenPage } from './dialscreen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DialscreenPageRoutingModule
  ],
  declarations: [DialscreenPage]
})
export class DialscreenPageModule {}
