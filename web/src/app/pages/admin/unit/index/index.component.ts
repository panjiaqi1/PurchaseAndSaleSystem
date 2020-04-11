import { Component, OnInit } from '@angular/core';
import { Unit } from '../../../../common/unit';
import { AppComponent } from '../../../../app.component';
import { UnitService } from '../../../../core/service/unit.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {

  units: Array<Unit>;

  constructor(private appComponent: AppComponent,
              private unitService: UnitService) {
  }

  ngOnInit() {
    this.getAll();
  }

  public getAll() {
    this.unitService.getAll()
      .subscribe((data: Array<Unit>) => {
        this.units = data;
      }, () => {
        console.log('error');
      });
  }

  delete(unit: Unit) {
    // 确认框
    this.appComponent.confirm(() => {
      this.unitService.deleteById(unit.id).subscribe(() => {
        this.getAll();
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
}
