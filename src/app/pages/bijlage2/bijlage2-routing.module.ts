import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bijlage2Page } from './bijlage2.page';

const routes: Routes = [
  {
    path: '',
    component: Bijlage2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bijlage2PageRoutingModule {}
