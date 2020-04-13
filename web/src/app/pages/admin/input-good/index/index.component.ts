import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppComponent } from '../../../../app.component';
import { InOut } from '../../../../common/in-out';
import { InputGoodService } from '../../../../core/service/input-good.service';
import { Good } from '../../../../common/good';
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

  queryForm: FormGroup;

  inOuts: Page<InOut>;

  constructor(private appComponent: AppComponent,
              private inputGoodService: InputGoodService,
              private builder: FormBuilder) {
  }

  ngOnInit() {
    this.page = 0;
    this.size = config.size;
    this.queryForm = this.builder.group({
      beInput: true,
      goodId: null
    });
    this.pageAll();
  }

  public pageAll() {
    this.inputGoodService.page(this.page, this.size, this.queryForm.getRawValue().goodId,
      this.queryForm.getRawValue().beInput)
      .subscribe((data: Page<InOut>) => {
        this.inOuts = data;
      }, () => {
        console.log('error');
      });
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

  bindGood(good: Good) {
    if (good && good.id) {
      // 合法，设置 collegeId
      this.queryForm.patchValue({
        goodId: good.id
      });
    } else {
      // 不合法，置空
      this.queryForm.patchValue({
        goodId: null
      });
    }
  }
}
