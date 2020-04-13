import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index/index.component';
import { NgxEchartsModule } from 'ngx-echarts';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    IndexRoutingModule,
    NgxEchartsModule
  ]
})
export class IndexModule { }
