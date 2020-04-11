import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Unit } from '../../../../common/unit';
import { UnitService } from '../../../../core/service/unit.service';
import { AppComponent } from '../../../../app.component';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.less']
})
export class AddComponent implements OnInit {

  unitForm: FormGroup;

  unit: Unit;

  constructor(private builder: FormBuilder,
              private unitService: UnitService,
              private appComponent: AppComponent,
              private router: Router) {
  }

  /** https://angular.cn/guide/form-validation#built-in-validators */
  get name(): AbstractControl {
    return this.unitForm.get('name');
  }

  ngOnInit() {
    this.unitForm = this.builder.group({
      name: ['', [Validators.required]]
    }, {updateOn: 'blur'});
  }

  public saveUnit(unit: Unit) {
    this.unitService.save(unit)
      .subscribe(() => {
        this.appComponent.success(() => {
          this.router.navigateByUrl('/unit');
        }, '新增成功');
      }, (res: HttpErrorResponse) => {
        this.appComponent.error(() => {
        }, `新增失败:${res.error.message}`);
      });
  }

  submit() {
    this.saveUnit(this.unitForm.value);
  }
}
