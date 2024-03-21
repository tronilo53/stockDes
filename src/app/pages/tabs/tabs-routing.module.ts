import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'stock',
        loadChildren: () => import('../stock/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'pedidos',
        loadChildren: () => import('../pedidos/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'pistola',
        loadChildren: () => import('../pistola/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/stock',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/stock',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
