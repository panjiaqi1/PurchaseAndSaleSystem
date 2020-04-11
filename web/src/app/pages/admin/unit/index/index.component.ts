import { Component, OnInit } from '@angular/core';
import { Good } from '../../../../common/good';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Unit } from '../../../../common/unit';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {
  queryForm: FormGroup;
  companies: Array<Unit> = [
    {id: 1, name: '千克'},
    {id: 2, name: '吨'},
    {id: 3, name: '克'},
    {id: 4, name: '桶'},
  ];


  constructor(private builder: FormBuilder,) {
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
