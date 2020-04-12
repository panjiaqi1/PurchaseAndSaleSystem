import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncModule } from '../../../func/func.module';
import { ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './index/index.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ExtendedFieldRoutingModule } from './extended-field-routing.module';

@NgModule({
  declarations: [IndexComponent, AddComponent, EditComponent],
  imports: [
    CommonModule,
    ExtendedFieldRoutingModule,
    FuncModule,
    ReactiveFormsModule,
  ]
})
export class ExtendedFieldModule {
}
