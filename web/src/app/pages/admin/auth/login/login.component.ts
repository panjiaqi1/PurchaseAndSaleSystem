import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../core/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  /** 登录表单对象 */
  loginForm: FormGroup;

  /** 错误信息 */
  errorInfo: string;

  /** 显示错误信息 */
  showErrorInfo: boolean;

  constructor(private builder: FormBuilder,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {

    /** 创建表单 */
    this.loginForm = this.builder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    this.authService.login(this.loginForm.value)
      .subscribe(() => {
        this.showErrorInfo = false;
        this.router.navigateByUrl('/admin');
      }, () => {
        this.errorInfo = '登录失败，请检查您的用户名、密码';
        this.showErrorInfo = true;
      });
  }
}
