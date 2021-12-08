import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bijlage2PageRoutingModule } from './bijlage2-routing.module';

import { Bijlage2Page } from './bijlage2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bijlage2PageRoutingModule
  ],
  declarations: [Bijlage2Page]
})
export class Bijlage2PageModule {}
