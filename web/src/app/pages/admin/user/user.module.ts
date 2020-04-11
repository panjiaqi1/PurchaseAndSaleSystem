import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncModule } from '../../../func/func.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { IndexComponent } from './index/index.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [IndexComponent, AddComponent, EditComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FuncModule,
    ReactiveFormsModule,
  ]
})
export class UserModule {
}
