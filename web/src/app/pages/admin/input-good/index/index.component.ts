import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppComponent } from '../../../../app.component';
import { InOut } from '../../../../common/in-out';
import { InputGoodService } from '../../../../core/service/input-good.service';
import { Good } from '../../../../common/good';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {
  queryForm: FormGroup;

  inOuts: Array<InOut>;

  constructor(private appComponent: AppComponent,
              private inputGoodService: InputGoodService,
              private builder: FormBuilder) {
  }

  ngOnInit() {
    this.queryForm = this.builder.group({
      goodId: null
    });
    this.query();
  }

  public query() {
    this.inputGoodService.findAllByGoodId(this.queryForm.getRawValue().goodId)
      .subscribe((data: Array<InOut>) => {
        this.inOuts = data;
      }, () => {
        console.log('error');
      });
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
