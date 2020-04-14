import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncModule } from '../../../func/func.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoodRoutingModule } from './good-routing.module';
import { IndexComponent } from './index/index.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [IndexComponent, AddComponent, EditComponent],
  imports: [
    CommonModule,
    GoodRoutingModule,
    FuncModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class GoodModule {
}
