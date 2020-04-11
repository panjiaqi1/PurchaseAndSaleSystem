import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppComponent } from '../../../../app.component';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../../../../core/service/user.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.less']
})
export class AddComponent implements OnInit {
  userFrom: FormGroup;  // 类别表单组

  constructor(private builder: FormBuilder,
              private appComponent: AppComponent,
              private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
    this.userFrom = this.builder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      email: ['', Validators.required],
    });
  }

  /**
   * 保存
   */
  submit() {
    this.userService.save(this.userFrom.value)
      .subscribe(() => {
        this.appComponent.success(() => {
          this.router.navigateByUrl('/admin/user');
        }, '新增成功');
      }, (res: HttpErrorResponse) => {
        this.appComponent.error(() => {
        }, `新增失败:${res.error.message}`);
      });
  }

  get username(): AbstractControl {
    return this.userFrom.get('username');
  }

  get password(): AbstractControl {
    return this.userFrom.get('password');
  }

  get email(): AbstractControl {
    return this.userFrom.get('email');
  }

}
