import { Component, OnInit } from '@angular/core';
import { Unit } from '../../../../common/unit';
import { AppComponent } from '../../../../app.component';
import { UnitService } from '../../../../core/service/unit.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Good } from '../../../../common/good';
import { GoodService } from '../../../../core/service/good.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {

  goods: Array<Good>;

  constructor(private appComponent: AppComponent,
              private goodService: GoodService) {
  }

  ngOnInit() {
    this.getAll();
  }

  public getAll() {
    this.goodService.getAll()
      .subscribe((data: Array<Good>) => {
        this.goods = data;
      }, () => {
        console.log('error');
      });
  }

  delete(good: Good) {
    // 确认框
    this.appComponent.confirm(() => {
      this.goodService.deleteById(good.id).subscribe(() => {
        this.getAll();
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
}
