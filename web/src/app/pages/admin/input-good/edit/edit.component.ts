import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AppComponent } from '../../../../app.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.less']
})
export class EditComponent implements OnInit {

  categoryFrom: FormGroup;  // 类别表单组

  categoryId: number;   // 当前编辑的类别id

  constructor(private builder: FormBuilder,
              private route: ActivatedRoute,
              private appComponent: AppComponent,
              private router: Router) {
    this.createForm();
  }

  createForm() {
    this.categoryFrom = this.builder.group({
      name: ['', [Validators.required]],
      weight: ['', [Validators.required]],
      slug: ['', Validators.required],
      parentCategory: [null]
    });
  }

  ngOnInit() {
    // 根据获取类别信息
    // this.route.params.subscribe((params: Params) => {
    //   this.categoryId = +params.id;
    //   this.categoryService.getById(this.categoryId)
    //     .subscribe((category: Category) => {
    //       this.categoryFrom.patchValue(category);
    //     });
    // });
  }

  /**
   * 更新类别
   */
  submit() {
    // this.categoryService.update(this.categoryId, this.categoryFrom.value)
    //   .subscribe(() => {
    //     this.appComponent.success(() => {
    //       this.router.navigateByUrl('/admin/category');
    //     }, '类别更新成功');
    //   }, (res: HttpErrorResponse) => {
    //     this.appComponent.error(() => {
    //     }, `类别更新失败:${res.error.message}`);
    //   });
  }

  get name(): AbstractControl {
    return this.categoryFrom.get('name');
  }

  get weight(): AbstractControl {
    return this.categoryFrom.get('weight');
  }

  get slug(): AbstractControl {
    return this.categoryFrom.get('slug');
  }
}
