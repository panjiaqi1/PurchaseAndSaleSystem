import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppComponent } from '../../../../app.component';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ExtendedField } from '../../../../common/extended-field';
import { ExtendedFieldService } from '../../../../core/service/extended-field.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.less']
})
export class AddComponent implements OnInit {

  extendedFieldForm: FormGroup;

  constructor(private builder: FormBuilder,
              private extendedFieldService: ExtendedFieldService,
              private appComponent: AppComponent,
              private router: Router) {
  }

  /** https://angular.cn/guide/form-validation#built-in-validators */
  get name(): AbstractControl {
    return this.extendedFieldForm.get('name');
  }

  ngOnInit() {
    this.extendedFieldForm = this.builder.group({
      name: ['', [Validators.required]]
    }, {updateOn: 'blur'});
  }

  public saveUnit(extendedField: ExtendedField) {
    this.extendedFieldService.save(extendedField)
      .subscribe(() => {
        this.appComponent.success(() => {
          this.router.navigateByUrl('/extendedField');
        }, '新增成功');
      }, (res: HttpErrorResponse) => {
        this.appComponent.error(() => {
        }, `新增失败:${res.error.message}`);
      });
  }

  submit() {
    this.saveUnit(this.extendedFieldForm.value);
  }
}
