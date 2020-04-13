import { Component, OnInit } from '@angular/core';
import { Unit } from '../../../../common/unit';
import { AppComponent } from '../../../../app.component';
import { UnitService } from '../../../../core/service/unit.service';
import { HttpErrorResponse } from '@angular/common/http';
import { config } from '../../../../conf/app.config';
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

  units: Page<Unit>;

  constructor(private appComponent: AppComponent,
              private unitService: UnitService) {
  }

  ngOnInit() {
    this.page = 0;
    this.size = config.size;
    this.pageAll();
  }

  public pageAll() {
    this.unitService.page(this.page, this.size)
      .subscribe((data: Page<Unit>) => {
        this.units = data;
        console.log(this.units);
      }, () => {
        console.log('error');
      });
  }

  delete(unit: Unit) {
    // 确认框
    this.appComponent.confirm(() => {
      this.unitService.deleteById(unit.id).subscribe(() => {
        this.pageAll();
        // 操作成功提示
        this.appComponent.success(() => {
        }, '删除成功');
      }, (res: HttpErrorResponse) => {
        // 操作失败提示
        this.appComponent.error(() => {
        }, `删除失败:${res.error.message}`);
      });
    }, '即将删除单位');
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
