import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BestellenPage } from './bestellen.page';

const routes: Routes = [
  {
    path: '',
    component: BestellenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BestellenPageRoutingModule {}
