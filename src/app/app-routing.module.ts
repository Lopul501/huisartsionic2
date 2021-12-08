import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'homepagina',
    loadChildren: () => import('./pages/homepagina/homepagina.module').then( m => m.HomepaginaPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'epd',
    loadChildren: () => import('./pages/epd/epd.module').then( m => m.EpdPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'alarmnummer',
    loadChildren: () => import('./pages/alarmnummer/alarmnummer.module').then( m => m.AlarmnummerPageModule)
  },
  {
    path: 'specialist',
    loadChildren: () => import('./pages/specialist/specialist.module').then( m => m.SpecialistPageModule)
  },
  {
    path: 'bloedonderzoek',
    loadChildren: () => import('./pages/bloedonderzoek/bloedonderzoek.module').then( m => m.BloedonderzoekPageModule)
  },
  {
    path: 'afspraakmaken',
    loadChildren: () => import('./pages/afspraakmaken/afspraakmaken.module').then( m => m.AfspraakmakenPageModule)
  },
  {
    path: 'accountmaken',
    loadChildren: () => import('./pages/accountmaken/accountmaken.module').then( m => m.AccountmakenPageModule)
  },
  {
    path: 'berichten',
    loadChildren: () => import('./pages/berichten/berichten.module').then( m => m.BerichtenPageModule)
  },
  {
    path: 'uitloggen',
    loadChildren: () => import('./pages/uitloggen/uitloggen.module').then( m => m.UitloggenPageModule)
  },
  {
    path: 'maakeenaccountaan',
    loadChildren: () => import('./pages/maakeenaccountaan/maakeenaccountaan.module').then( m => m.MaakeenaccountaanPageModule)
  },
  {
    path: 'medicatie',
    loadChildren: () => import('./pages/medicatie/medicatie.module').then( m => m.MedicatiePageModule)
  },
  {
    path: 'bijlage',
    loadChildren: () => import('./pages/bijlage/bijlage.module').then( m => m.BijlagePageModule)
  },
  {
    path: 'bijlage2',
    loadChildren: () => import('./pages/bijlage2/bijlage2.module').then( m => m.Bijlage2PageModule)
  },
  {
    path: 'medicijneninname',
    loadChildren: () => import('./pages/medicijneninname/medicijneninname.module').then( m => m.MedicijneninnamePageModule)
  },
  {
    path: 'bestellen',
    loadChildren: () => import('./pages/bestellen/bestellen.module').then( m => m.BestellenPageModule)
  },
  {
    path: 'apotheek',
    loadChildren: () => import('./pages/apotheek/apotheek.module').then( m => m.ApotheekPageModule)
  },
  {
    path: 'chat1',
    loadChildren: () => import('./pages/chat1/chat1.module').then( m => m.Chat1PageModule)
  },
  {
    path: 'chat2',
    loadChildren: () => import('./pages/chat2/chat2.module').then( m => m.Chat2PageModule)
  },
  {
    path: 'chat3',
    loadChildren: () => import('./pages/chat3/chat3.module').then( m => m.Chat3PageModule)
  },
  {
    path: 'dialscreen',
    loadChildren: () => import('./pages/dialscreen/dialscreen.module').then( m => m.DialscreenPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
