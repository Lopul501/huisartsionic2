import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicatiePage } from './medicatie.page';

const routes: Routes = [
  {
    path: '',
    component: MedicatiePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicatiePageRoutingModule {}
