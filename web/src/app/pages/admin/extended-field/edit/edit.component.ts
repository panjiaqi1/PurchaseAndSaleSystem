import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AppComponent } from '../../../../app.component';
import { ExtendedField } from '../../../../common/extended-field';
import { ExtendedFieldService } from '../../../../core/service/extended-field.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.less']
})
export class EditComponent implements OnInit {

  extendedFieldForm: FormGroup;

  /**
   * 要编辑的单位Id
   */
  id: number;

  extendedField: ExtendedField;

  constructor(private builder: FormBuilder,
              private route: ActivatedRoute,
              private extendedFieldService: ExtendedFieldService,
              private appComponent: AppComponent,
              private router: Router) {
    this.createForm();
  }

  createForm() {
    this.extendedFieldForm = this.builder.group({
      name: ['', Validators.required],
    });
  }

  initForm(data) {
    this.extendedFieldForm.setValue({
      name: data.name,
    });
  }

  ngOnInit() {
    this.getEditExtendedField();
  }

  getEditExtendedField() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
      this.extendedFieldService.findById(params.id)
        .subscribe((extendedField: ExtendedField) => {
          this.initForm(extendedField);
        });
    });
  }

  /** https://angular.cn/guide/form-validation#built-in-validators */
  get name(): AbstractControl {
    return this.extendedFieldForm.get('name');
  }

  public update(extendedField: ExtendedField) {
    this.extendedFieldService.update(this.id, extendedField)
      .subscribe(() => {
        this.appComponent.success(() => {
          this.router.navigateByUrl('/extendedField');
        }, '更新成功');
      }, (res: HttpErrorResponse) => {
        this.appComponent.error(() => {
        }, `更新失败:${res.error.message}`);
      });
  }

  submit() {
    this.update(this.extendedFieldForm.value);
  }

}
