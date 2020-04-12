import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { GoodExtendedFieldService } from '../../../../core/service/good-extended-field.service';
import { GoodExtendedField } from '../../../../common/good-extended-field';
import { AppComponent } from '../../../../app.component';
import { Good } from '../../../../common/good';
import { ExtendedField } from '../../../../common/extended-field';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.less']
})
export class EditComponent implements OnInit {

  goodExtendedFieldForm: FormGroup;

  /**
   * 要编辑的单位Id
   */
  id: number;

  goodExtendedField: GoodExtendedField;

  constructor(private builder: FormBuilder,
              private route: ActivatedRoute,
              private goodExtendedFieldService: GoodExtendedFieldService,
              private appComponent: AppComponent,
              private router: Router) {
    this.createForm();
  }

  createForm() {
    this.goodExtendedFieldForm = this.builder.group({
      value: ['', Validators.required],
      good: null,
      extendedField: null
    });
  }

  initForm(data) {
    this.goodExtendedFieldForm.setValue({
      value: data.value,
      good: data.good,
      extendedField: data.extendedField
    });
  }

  ngOnInit() {
    this.getEditExtendedField();
  }

  getEditExtendedField() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
      this.goodExtendedFieldService.findById(params.id)
        .subscribe((goodExtendedField: GoodExtendedField) => {
          this.initForm(goodExtendedField);
        });
    });
  }

  /** https://angular.cn/guide/form-validation#built-in-validators */
  get value(): AbstractControl {
    return this.goodExtendedFieldForm.get('value');
  }

  public update(goodExtendedField: GoodExtendedField) {
    this.goodExtendedFieldService.update(this.id, goodExtendedField)
      .subscribe(() => {
        this.appComponent.success(() => {
          this.router.navigateByUrl('/goodExtendedField');
        }, '更新成功');
      }, (res: HttpErrorResponse) => {
        this.appComponent.error(() => {
        }, `更新失败:${res.error.message}`);
      });
  }

  submit() {
    this.update(this.goodExtendedFieldForm.value);
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
