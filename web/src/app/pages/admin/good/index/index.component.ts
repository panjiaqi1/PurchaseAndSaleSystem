import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../../../app.component';
import { HttpErrorResponse } from '@angular/common/http';
import { Good } from '../../../../common/good';
import { GoodService } from '../../../../core/service/good.service';
import { config } from '../../../../conf/app.config';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Page } from '../../../../base/page';

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

  queryForm: FormGroup;

  goods: Page<Good>;

  constructor(private appComponent: AppComponent,
              private goodService: GoodService,
              private builder: FormBuilder) {
  }

  ngOnInit() {
    this.page = 0;
    this.size = config.size;
    this.createForm();
    this.pageAll();
  }

  createForm() {
    this.queryForm = this.builder.group({
      name: '',
    });
  }

  public pageAll() {
    this.goodService.page(this.page, this.size, this.queryForm.getRawValue().name)
      .subscribe((data: Page<Good>) => {
        this.goods = data;
      }, () => {
        console.log('error');
      });
  }

  delete(good: Good) {
    // 确认框
    this.appComponent.confirm(() => {
      this.goodService.deleteById(good.id).subscribe(() => {
        this.pageAll();
        // 操作成功提示
        this.appComponent.success(() => {
        }, '删除成功');
      }, (res: HttpErrorResponse) => {
        // 操作失败提示
        this.appComponent.error(() => {
        }, `删除失败:${res.error.message}`);
      });
    }, '即将删除');
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
