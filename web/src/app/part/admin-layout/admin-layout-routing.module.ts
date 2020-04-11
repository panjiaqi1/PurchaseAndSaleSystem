import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../../pages/admin/index/index.module').then(m => m.IndexModule)
      },
      {
        path: 'inputCargo',
        loadChildren: () => import('../../pages/admin/input-good/input-good.module').then(m => m.InputGoodModule),
        data: {
          title: '进货管理'
        }
      },
      {
        path: 'product',
        loadChildren: () => import('../../pages/admin/good/good.module').then(m => m.GoodModule),
        data: {
          title: '货物管理'
        }
      },
      {
        path: 'unit',
        loadChildren: () => import('../../pages/admin/unit/unit.module').then(m => m.UnitModule),
        data: {
          title: '单位管理'
        }
      },
      {
        path: 'user',
        loadChildren: () => import('../../pages/admin/user/user.module').then(m => m.UserModule),
        data: {
          title: '用户管理'
        }
      },
    ]
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('../../pages/admin/auth/auth.module').then(m => m.AuthModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule {
}
