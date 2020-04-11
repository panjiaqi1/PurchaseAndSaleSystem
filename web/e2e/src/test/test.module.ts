import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MenuService } from '../../../src/app/core/service/menu.service';
import { MenuStubServiceService } from './service/menu-stub-service.service';
import { CommentService } from '../../../src/app/core/service/comment.service';
import { CommentStubService } from './service/comment-stub.service';
import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteStubService } from './service/activated-route-stub.service';
import { CategorySubServiceService } from './service/category-sub-service.service';
import { UnitService } from '../../../src/app/core/service/unit.service';

/**
 * 提供测试类的模块
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientTestingModule
  ],
  exports: [HttpClientTestingModule],
  providers: [
    {provide: MenuService, useClass: MenuStubServiceService},
    {provide: CommentService, useClass: CommentStubService},
    {provide: UnitService, useClass: CategorySubServiceService}
  ]
})
export class TestModule {
}
