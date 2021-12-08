import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApotheekPageRoutingModule } from './apotheek-routing.module';

import { ApotheekPage } from './apotheek.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApotheekPageRoutingModule
  ],
  declarations: [ApotheekPage]
})
export class ApotheekPageModule {}
