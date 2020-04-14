import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('../../pages/admin/index/index.module').then(m => m.IndexModule)
      },
      {
        path: 'inputGood',
        loadChildren: () => import('../../pages/admin/input-good/input-good.module').then(m => m.InputGoodModule),
        data: {
          title: '进货管理'
        }
      },
      {
        path: 'good',
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
        path: 'extendedField',
        loadChildren: () => import('../../pages/admin/extended-field/extended-field.module').then(m => m.ExtendedFieldModule),
        data: {
          title: '扩展字段'
        }
      },
      {
        path: 'goodExtendedField',
        loadChildren: () => import('../../pages/admin/good-extended-field/good-extended-field.module').then(m => m.GoodExtendedFieldModule),
        data: {
          title: '扩展字段记录'
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
  // {
  //   path: '',
  //   redirectTo: 'auth',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'auth',
  //   loadChildren: () => import('../../pages/admin/auth/auth.module').then(m => m.AuthModule)
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule {
}
