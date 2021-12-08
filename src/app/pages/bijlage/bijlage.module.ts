import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BijlagePageRoutingModule } from './bijlage-routing.module';

import { BijlagePage } from './bijlage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BijlagePageRoutingModule
  ],
  declarations: [BijlagePage]
})
export class BijlagePageModule {}
