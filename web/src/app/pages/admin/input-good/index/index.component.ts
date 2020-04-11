import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppComponent } from '../../../../app.component';
import { InOut } from '../../../../common/in-out';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {

  inputProducts: Array<InOut> = [
    {id: 1, amount: 20, createTime: '2020/3/1:10:10:39', inputOrOutput: null, good: null, user: null},
    {id: 2, amount: 30, createTime: '2020/3/2:12:14:39', inputOrOutput: null, good: null, user: null},
    {id: 3, amount: 40, createTime: '2020/3/3:14:20:50', inputOrOutput: null, good: null, user: null},
  ];


  queryForm: FormGroup;


  constructor(
    private builder: FormBuilder,
    private appComponent: AppComponent) {
  }

  ngOnInit() {

    this.queryForm = this.builder.group({
      name: null
    });
  }


  /**
   * 删除类别
   * @param category 所选类别
   */
  delete(category: any) {
    // // 确认框
    // this.appComponent.confirm(() => {
    //   this.categoryService.deleteById(category.id).subscribe(() => {
    //     this.categoryPage.content = this.categoryPage.content.filter(ob => ob !== category);
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
