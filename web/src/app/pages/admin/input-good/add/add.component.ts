import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppComponent } from '../../../../app.component';
import { Router } from '@angular/router';
import { Unit } from '../../../../common/unit';
import { UnitService } from '../../../../core/service/unit.service';
import { HttpErrorResponse } from '@angular/common/http';
import { InOut } from '../../../../common/in-out';
import { InputGoodService } from '../../../../core/service/input-good.service';
import { Good } from '../../../../common/good';
import { User } from '../../../../common/user';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.less']
})
export class AddComponent implements OnInit {

  inOutForm: FormGroup;

  constructor(private builder: FormBuilder,
              private inputGoodService: InputGoodService,
              private appComponent: AppComponent,
              private router: Router) {
  }

  /** https://angular.cn/guide/form-validation#built-in-validators */
  get amount(): AbstractControl {
    return this.inOutForm.get('amount');
  }

  ngOnInit() {
    this.inOutForm = this.builder.group({
      amount: ['', [Validators.required]],
      beInput: true,
      good: null,
      user: new User()
    }, {updateOn: 'blur'});
  }

  public saveUnit(inOut: InOut) {
    this.inputGoodService.save(inOut)
      .subscribe(() => {
        this.appComponent.success(() => {
          this.router.navigateByUrl('/inputGood');
        }, '新增成功');
      }, (res: HttpErrorResponse) => {
        this.appComponent.error(() => {
        }, `新增失败:${res.error.message}`);
      });
  }

  submit() {
    this.saveUnit(this.inOutForm.value);
  }

  bindGood(goodDate: Good) {
    this.inOutForm.patchValue({
      good: goodDate
    });
  }
}
