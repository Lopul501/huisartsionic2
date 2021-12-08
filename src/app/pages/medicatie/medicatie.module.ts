import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicatiePageRoutingModule } from './medicatie-routing.module';

import { MedicatiePage } from './medicatie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicatiePageRoutingModule
  ],
  declarations: [MedicatiePage]
})
export class MedicatiePageModule {}
