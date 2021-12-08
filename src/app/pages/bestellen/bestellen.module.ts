import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BestellenPageRoutingModule } from './bestellen-routing.module';

import { BestellenPage } from './bestellen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BestellenPageRoutingModule
  ],
  declarations: [BestellenPage]
})
export class BestellenPageModule {}
