import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppComponent } from '../../../../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.less']
})
export class AddComponent implements OnInit {

  categoryFrom: FormGroup;  // 类别表单组

  constructor(private builder: FormBuilder,
              private appComponent: AppComponent,
              private router: Router) {
  }

  ngOnInit() {
    this.categoryFrom = this.builder.group({
      name: ['', [Validators.required]],
      weight: ['', [Validators.required]],
      slug: ['', Validators.required],
      parentCategory: [null]
    }, {updateOn: 'blur'});
  }

  /**
   * 保存类别
   */
  submit() {
    // this.categoryService.save(this.categoryFrom.value)
    //   .subscribe(() => {
    //     this.appComponent.success(() => {
    //       this.router.navigateByUrl('/admin/category');
    //     }, '类别新增成功');
    //   }, (res: HttpErrorResponse) => {
    //     this.appComponent.error(() => {
    //     }, `类别新增失败:${res.error.message}`);
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
