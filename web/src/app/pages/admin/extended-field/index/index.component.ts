import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../../../app.component';
import { HttpErrorResponse } from '@angular/common/http';
import { config } from '../../../../conf/app.config';
import { Page } from '../../../../base/page';
import { ExtendedField } from '../../../../common/extended-field';
import { ExtendedFieldService } from '../../../../core/service/extended-field.service';

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

  extendedFields: Page<ExtendedField>;

  constructor(private appComponent: AppComponent,
              private extendedFieldService: ExtendedFieldService) {
  }

  ngOnInit() {
    this.page = 0;
    this.size = config.size;
    this.pageAll();
  }

  public pageAll() {
    this.extendedFieldService.page(this.page, this.size)
      .subscribe((data: Page<ExtendedField>) => {
        this.extendedFields = data;
      }, () => {
        console.log('error');
      });
  }

  delete(extendedField: ExtendedField) {
    // 确认框
    this.appComponent.confirm(() => {
      this.extendedFieldService.deleteById(extendedField.id).subscribe(() => {
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
