import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AppComponent } from '../../../../app.component';
import { User } from '../../../../common/user';
import { UserService } from '../../../../core/service/user.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {

  // TODO 登录及用户管理

  users: Array<User> = [
    {id: 1, username: '张三', password: '112', role: null},
    {id: 1, username: '李四', password: '112', role: null},
    {id: 1, username: '王五', password: '112', role: null},

  ];


  constructor(private userService: UserService,
              private builder: FormBuilder,
              private appComponent: AppComponent) {
  }

  ngOnInit() {
  }


  /**
   * 删除类别
   * @param user 所选类别
   */
  delete(user: User) {
    // // 确认框
    // this.appComponent.confirm(() => {
    //   this.userService.deleteById(user.id).subscribe(() => {
    //     this.userPage.content = this.userPage.content.filter(ob => ob !== user);
    //     // 操作成功提示
    //     this.appComponent.success(() => {
    //     }, '删除成功');
    //   }, (res: HttpErrorResponse) => {
    //     // 操作失败提示
    //     this.appComponent.error(() => {
    //     }, '删除失败:' + res.error.message);
    //   });
    // }, '即将删除类别');
  }

}
