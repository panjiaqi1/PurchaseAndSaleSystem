import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AppComponent } from '../../../../app.component';
import { HttpErrorResponse } from '@angular/common/http';
import { Good } from '../../../../common/good';
import { GoodService } from '../../../../core/service/good.service';
import { Unit } from '../../../../common/unit';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.less']
})
export class EditComponent implements OnInit {


  goodForm: FormGroup;

  /**
   * 要编辑的单位Id
   */
  id: number;

  good: Good;

  constructor(private builder: FormBuilder,
              private route: ActivatedRoute,
              private goodService: GoodService,
              private appComponent: AppComponent,
              private router: Router) {
    this.createForm();
  }

  createForm() {
    this.goodForm = this.builder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      unit: null,
    });
  }

  initForm(data) {
    this.goodForm.setValue({
      name: data.name,
      description: data.description,
      unit: data.unit
    });
  }

  ngOnInit() {
    this.getEditExtendedField();
  }

  getEditExtendedField() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
      this.goodService.findById(params.id)
        .subscribe((good: Good) => {
          this.initForm(good);
        });
    });
  }

  /** https://angular.cn/guide/form-validation#built-in-validators */
  get name(): AbstractControl {
    return this.goodForm.get('name');
  }

  /** https://angular.cn/guide/form-validation#built-in-validators */
  get description(): AbstractControl {
    return this.goodForm.get('description');
  }

  public update(good: Good) {
    this.goodService.update(this.id, good)
      .subscribe(() => {
        this.appComponent.success(() => {
          this.router.navigateByUrl('/good');
        }, '更新成功');
      }, (res: HttpErrorResponse) => {
        this.appComponent.error(() => {
        }, `更新失败:${res.error.message}`);
      });
  }

  submit() {
    this.update(this.goodForm.value);
  }

  bindUnit(unitDate: Unit) {
    this.goodForm.patchValue({
      unit: unitDate
    });
  }
}
