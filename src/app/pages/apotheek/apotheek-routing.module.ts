import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApotheekPage } from './apotheek.page';

const routes: Routes = [
  {
    path: '',
    component: ApotheekPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApotheekPageRoutingModule {}
