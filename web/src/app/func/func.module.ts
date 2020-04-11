import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UnitSelectComponent } from './component/unit-select/unit-select.component';
import { GoodSelectComponent } from './component/good-select/good-select.component';

@NgModule({
  declarations: [
    UnitSelectComponent,
    GoodSelectComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    UnitSelectComponent,
    GoodSelectComponent
  ]
})
export class FuncModule {
}
