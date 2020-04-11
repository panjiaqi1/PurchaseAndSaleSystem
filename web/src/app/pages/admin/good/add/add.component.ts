import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { UnitService } from '../../../../core/service/unit.service';
import { AppComponent } from '../../../../app.component';
import { Router } from '@angular/router';
import { Good } from '../../../../common/good';
import { Unit } from '../../../../common/unit';
import { GoodService } from '../../../../core/service/good.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.less']
})
export class AddComponent implements OnInit {

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
    this.saveGood(this.goodForm.value);
  }

  bindUnit(unitDate: Unit) {
    this.goodForm.patchValue({
      unit: unitDate
    });
  }
}
