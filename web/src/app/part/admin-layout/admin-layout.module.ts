import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [HeaderComponent, LayoutComponent, MenuComponent],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule
  ],
  exports: [LayoutComponent]
})
export class AdminLayoutModule {
}
