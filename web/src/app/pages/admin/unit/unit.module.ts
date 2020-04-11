import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncModule } from '../../../func/func.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UnitRoutingModule } from './unit-routing.module';
import { IndexComponent } from './index/index.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [IndexComponent, AddComponent, EditComponent],
  imports: [
    CommonModule,
    UnitRoutingModule,
    FuncModule,
    ReactiveFormsModule,
  ]
})
export class UnitModule {
}
