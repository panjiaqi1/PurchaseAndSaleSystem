import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.less']
})
export class EditComponent implements OnInit {

  tagForm: FormGroup;

  tag: any;

  constructor(private builder: FormBuilder,
              private route: ActivatedRoute) {
    this.createForm();
  }

  createForm() {
    this.tagForm = this.builder.group({
      name: ['', Validators.required],
    });
  }

  initForm(data) {
    this.tagForm.setValue({
      name: data.name,
    });
  }

  ngOnInit() {
  }

  /** https://angular.cn/guide/form-validation#built-in-validators */
  get name(): AbstractControl {
    return this.tagForm.get('name');
  }

  public updateTag(tag: any) {
    this.route.params.subscribe(params => {
      console.log(params);
      console.log(tag);
    });
  }

  submit() {
    this.updateTag(this.tagForm.value);
  }

}
