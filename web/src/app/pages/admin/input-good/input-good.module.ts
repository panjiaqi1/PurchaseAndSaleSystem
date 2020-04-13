import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { AddComponent } from './add/add.component';
import { FuncModule } from '../../../func/func.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InputGoodRoutingModule } from './input-good-routing.module';

@NgModule({
  declarations: [IndexComponent, AddComponent],
  imports: [
    CommonModule,
    InputGoodRoutingModule,
    FuncModule,
    ReactiveFormsModule,
  ],
})
export class InputGoodModule {
}
