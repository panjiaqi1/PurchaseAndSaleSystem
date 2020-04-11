import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AppComponent } from '../../../../app.component';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../../../../core/service/user.service';
import { User } from '../../../../common/user';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.less']
})
export class EditComponent implements OnInit {

  userFrom: FormGroup;

  userId: number;   // 当前编辑的用户id

  constructor(private builder: FormBuilder,
              private route: ActivatedRoute,
              private appComponent: AppComponent,
              private router: Router,
              private userService: UserService) {
    this.createForm();
  }

  createForm() {
    this.userFrom = this.builder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      email: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.findById();
  }

  initForm(data) {
    this.userFrom.setValue({
      username: data.username,
      password: data.password,
      email: data.email
    });
  }

  /**
   * 根据Id获取用户信息
   */
  findById() {
    this.route.params.subscribe((params: Params) => {
      this.userId = +params.id;
      this.userService.findById(this.userId)
        .subscribe((user: User) => {
          this.initForm(user);
        });
    });
  }

  /**
   * 更新
   */
  submit() {
    this.userService.update(this.userId, this.userFrom.value)
      .subscribe(() => {
        this.appComponent.success(() => {
          this.router.navigateByUrl('/admin/user');
        }, '更新成功');
      }, (res: HttpErrorResponse) => {
        this.appComponent.error(() => {
        }, `更新失败:${res.error.message}`);
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
