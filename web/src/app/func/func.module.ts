import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UnitSelectComponent } from './component/unit-select/unit-select.component';

@NgModule({
  declarations: [
    UnitSelectComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    UnitSelectComponent
  ]
})
export class FuncModule {
}
