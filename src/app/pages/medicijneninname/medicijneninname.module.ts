import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicijneninnamePageRoutingModule } from './medicijneninname-routing.module';

import { MedicijneninnamePage } from './medicijneninname.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicijneninnamePageRoutingModule
  ],
  declarations: [MedicijneninnamePage]
})
export class MedicijneninnamePageModule {}
