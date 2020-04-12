import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UnitSelectComponent } from './component/unit-select/unit-select.component';
import { GoodSelectComponent } from './component/good-select/good-select.component';
import { PageComponent } from './component/page/page.component';
import { SizeComponent } from './component/size/size.component';

@NgModule({
  declarations: [
    UnitSelectComponent,
    GoodSelectComponent,
    PageComponent,
    SizeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    UnitSelectComponent,
    GoodSelectComponent,
    PageComponent,
    SizeComponent
  ]
})
export class FuncModule {
}
