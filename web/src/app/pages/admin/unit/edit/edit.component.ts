import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Unit } from '../../../../common/unit';
import { UnitService } from '../../../../core/service/unit.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AppComponent } from '../../../../app.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.less']
})
export class EditComponent implements OnInit {

  unitForm: FormGroup;

  /**
   * 要编辑的单位Id
   */
  id: number;

  unit: Unit;

  constructor(private builder: FormBuilder,
              private route: ActivatedRoute,
              private unitService: UnitService,
              private appComponent: AppComponent,
              private router: Router) {
    this.createForm();
  }

  createForm() {
    this.unitForm = this.builder.group({
      name: ['', Validators.required],
    });
  }

  initForm(data) {
    this.unitForm.setValue({
      name: data.name,
    });
  }

  ngOnInit() {
    this.getEditUnit();
  }

  getEditUnit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
      this.unitService.findById(params.id)
        .subscribe((unit: Unit) => {
          this.initForm(unit);
        });
    });
  }

  /** https://angular.cn/guide/form-validation#built-in-validators */
  get name(): AbstractControl {
    return this.unitForm.get('name');
  }

  public updateTag(unit: Unit) {
    this.unitService.update(this.id, unit)
      .subscribe(() => {
        this.appComponent.success(() => {
          this.router.navigateByUrl('/unit');
        }, '更新成功');
      }, (res: HttpErrorResponse) => {
        this.appComponent.error(() => {
        }, `更新失败:${res.error.message}`);
      });
  }

  submit() {
    this.updateTag(this.unitForm.value);
  }

}
