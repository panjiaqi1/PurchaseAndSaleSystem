import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AppComponent } from '../../../../app.component';
import { GoodExtendedFieldService } from '../../../../core/service/good-extended-field.service';
import { GoodExtendedField } from '../../../../common/good-extended-field';
import { ExtendedField } from '../../../../common/extended-field';
import { Good } from '../../../../common/good';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.less']
})
export class AddComponent implements OnInit {

  goodExtendedFieldForm: FormGroup;

  constructor(private builder: FormBuilder,
              private goodExtendedFieldService: GoodExtendedFieldService,
              private appComponent: AppComponent,
              private router: Router) {
  }

  /** https://angular.cn/guide/form-validation#built-in-validators */
  get value(): AbstractControl {
    return this.goodExtendedFieldForm.get('value');
  }

  ngOnInit() {
    this.goodExtendedFieldForm = this.builder.group({
      value: ['', [Validators.required]],
      good: null,
      extendedField: null
    }, {updateOn: 'blur'});
  }

  public saveUnit(goodExtendedField: GoodExtendedField) {
    this.goodExtendedFieldService.save(goodExtendedField)
      .subscribe(() => {
        this.appComponent.success(() => {
          this.router.navigateByUrl('/goodExtendedField');
        }, '新增成功');
      }, (res: HttpErrorResponse) => {
        this.appComponent.error(() => {
        }, `新增失败:${res.error.message}`);
      });
  }

  submit() {
    this.saveUnit(this.goodExtendedFieldForm.value);
  }

  bindGood(goodDate: Good) {
    this.goodExtendedFieldForm.patchValue({
      good: goodDate
    });
  }

  bindExtendedField(extendedFieldDate: ExtendedField) {
    this.goodExtendedFieldForm.patchValue({
      extendedField: extendedFieldDate
    });
  }
}
