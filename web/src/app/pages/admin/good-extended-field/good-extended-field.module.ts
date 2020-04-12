import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './index/index.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { GoodExtendedFieldRoutingModule } from './good-extended-field-routing.module';
import { FuncModule } from '../../../func/func.module';

@NgModule({
  declarations: [IndexComponent, AddComponent, EditComponent],
  imports: [
    CommonModule,
    GoodExtendedFieldRoutingModule,
    FuncModule,
    ReactiveFormsModule,
  ]
})
export class GoodExtendedFieldModule {
}
