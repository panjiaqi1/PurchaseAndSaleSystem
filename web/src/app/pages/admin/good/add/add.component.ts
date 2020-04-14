import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { AppComponent } from '../../../../app.component';
import { Router } from '@angular/router';
import { Good } from '../../../../common/good';
import { Unit } from '../../../../common/unit';
import { GoodService } from '../../../../core/service/good.service';
import { GoodExtendedField } from '../../../../common/good-extended-field';
import { ExtendedField } from '../../../../common/extended-field';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.less']
})
export class AddComponent implements OnInit {

  goodExtendFields = new Array<GoodExtendedField>();

  goodExtendField: GoodExtendedField;

  goodForm: FormGroup;

  constructor(private builder: FormBuilder,
              private goodService: GoodService,
              private appComponent: AppComponent,
              private router: Router) {
  }

  /** https://angular.cn/guide/form-validation#built-in-validators */
  get name(): AbstractControl {
    return this.goodForm.get('name');
  }

  /** https://angular.cn/guide/form-validation#built-in-validators */
  get description(): AbstractControl {
    return this.goodForm.get('description');
  }

  ngOnInit() {
    this.goodForm = this.builder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      unit: null,
      goodExtendedFieldList: null
    }, {updateOn: 'blur'});
  }

  public saveGood(good: Good) {
    this.goodService.save(good).subscribe(() => {
      this.appComponent.success(() => {
        this.router.navigateByUrl('/good');
      }, '新增成功');
    }, (res: HttpErrorResponse) => {
      this.appComponent.error(() => {
      }, `新增失败:${res.error.message}`);
    });
  }

  submit() {
    this.goodForm.patchValue({
      goodExtendedFieldList: this.goodExtendFields
    });
    console.log(this.goodForm.value);
    this.saveGood(this.goodForm.value);
  }

  bindUnit(unitDate: Unit) {
    this.goodForm.patchValue({
      unit: unitDate
    });
  }

  insert() {
    this.goodExtendField = new GoodExtendedField();
    this.goodExtendFields.push(this.goodExtendField);
  }

  bindExtendedField(extendedField: ExtendedField) {
    this.goodExtendField.extendedField = extendedField;
  }
}
