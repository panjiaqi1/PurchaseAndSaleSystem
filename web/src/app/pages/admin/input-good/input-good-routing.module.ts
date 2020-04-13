import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    data: {
      title: '首页'
    }
  },
  {
    path: 'add',
    component: AddComponent,
    data: {
      title: '新增'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputGoodRoutingModule {
}
