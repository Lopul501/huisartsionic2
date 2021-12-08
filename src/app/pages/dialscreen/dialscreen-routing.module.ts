import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DialscreenPage } from './dialscreen.page';

const routes: Routes = [
  {
    path: '',
    component: DialscreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DialscreenPageRoutingModule {}
