import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { GoodExtendedField } from '../../../../common/good-extended-field';
import { Page } from '../../../../base/page';
import { AppComponent } from '../../../../app.component';
import { GoodExtendedFieldService } from '../../../../core/service/good-extended-field.service';
import { config } from '../../../../conf/app.config';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {

  /**
   * 页码
   */
  page: number;

  /**
   * 每页大小
   */
  size: number;

  goodExtendedFields: Page<GoodExtendedField>;

  constructor(private appComponent: AppComponent,
              private goodExtendedFieldService: GoodExtendedFieldService) {
  }

  ngOnInit() {
    this.page = 0;
    this.size = config.size;
    this.pageAll();
  }

  public pageAll() {
    this.goodExtendedFieldService.page(this.page, this.size)
      .subscribe((data: Page<GoodExtendedField>) => {
        this.goodExtendedFields = data;
      }, () => {
        console.log('error');
      });
  }

  delete(goodExtendedField: GoodExtendedField) {
    // 确认框
    this.appComponent.confirm(() => {
      this.goodExtendedFieldService.deleteById(goodExtendedField.id).subscribe(() => {
        this.pageAll();
        // 操作成功提示
        this.appComponent.success(() => {
        }, '删除成功');
      }, (res: HttpErrorResponse) => {
        // 操作失败提示
        this.appComponent.error(() => {
        }, `删除失败:${res.error.message}`);
      });
    }, '即将删除数据');
  }

  /**
   * 重新加载数据 根据 size
   */
  public reloadBySize(size: number): void {
    this.size = size;
    this.pageAll();
  }

  /**
   * 重新加载数据 根据 page
   */
  public reloadByPage(page: number): void {
    this.page = page;
    this.pageAll();
  }
}
