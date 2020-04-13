import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { FuncModule } from '../../../func/func.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InputGoodRoutingModule } from './input-good-routing.module';

@NgModule({
  declarations: [IndexComponent, AddComponent, EditComponent],
  imports: [
    CommonModule,
    InputGoodRoutingModule,
    FuncModule,
    ReactiveFormsModule,
  ],
  providers: [DatePipe]
})
export class InputGoodModule {
}
