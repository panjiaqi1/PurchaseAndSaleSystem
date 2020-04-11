import { Component, OnInit } from '@angular/core';
import { Good } from '../../../../common/good';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {
  queryForm: FormGroup;
  tags: Array<Good> = [
    {id: 1, name: '方便面', description: '123', stock: 10, unit: null, inOutList: null, extendedFieldList: null},
    {id: 1, name: '啤酒', description: '123', stock: 10, unit: null, inOutList: null, extendedFieldList: null},
    {id: 1, name: '大米', description: '123', stock: 10, unit: null, inOutList: null, extendedFieldList: null},
  ];


  constructor(private builder: FormBuilder) {
  }

  ngOnInit() {
    this.queryForm = this.builder.group({
      name: null
    });
  }

  delete(tag: any) {
    console.log(tag);
  }
}
