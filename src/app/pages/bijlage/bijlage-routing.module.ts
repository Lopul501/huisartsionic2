import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BijlagePage } from './bijlage.page';

const routes: Routes = [
  {
    path: '',
    component: BijlagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BijlagePageRoutingModule {}
