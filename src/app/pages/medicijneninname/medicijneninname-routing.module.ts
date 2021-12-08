import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicijneninnamePage } from './medicijneninname.page';

const routes: Routes = [
  {
    path: '',
    component: MedicijneninnamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicijneninnamePageRoutingModule {}
