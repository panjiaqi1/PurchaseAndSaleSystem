import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.less']
})
export class AddComponent implements OnInit {

  tagForm: FormGroup;

  tag: any;

  constructor(private builder: FormBuilder) {
  }

  /** https://angular.cn/guide/form-validation#built-in-validators */
  get name(): AbstractControl {
    return this.tagForm.get('name');
  }

  ngOnInit() {
    this.tagForm = this.builder.group({
      name: ['', [Validators.required]]
    }, {updateOn: 'blur'});
  }

  public saveTag(tag: any) {
    console.log(tag);
  }

  submit() {
    this.saveTag(this.tagForm.value);
  }
}
