import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Utils } from '../../../core/utils';
import { ExtendedField } from '../../../common/extended-field';
import { ExtendedFieldService } from '../../../core/service/extended-field.service';

@Component({
  selector: 'app-extended-field-select',
  templateUrl: './extended-field-select.component.html',
  styleUrls: ['./extended-field-select.component.less']
})
export class ExtendedFieldSelectComponent implements OnInit {


  private innerExtendedField: ExtendedField;

  extendedFields: Array<ExtendedField>;

  @Input()
  set extendedField(value: ExtendedField) {
    this.innerExtendedField = value;
  }

  get extendedField(): ExtendedField {
    return this.innerExtendedField;
  }

  constructor(private extendedFieldService: ExtendedFieldService) {
  }

  @Output()
  extendedFieldSelect: EventEmitter<ExtendedField> = new EventEmitter();

  ngOnInit() {
    if (this.extendedField == null) {
      this.innerExtendedField = null;
    }

    this.getAllExtendedField();
  }

  public getAllExtendedField() {
    this.extendedFieldService.getAll().subscribe((data: Array<ExtendedField>) => {
      this.extendedFields = data;
    });
  }

  public change(extendedField: ExtendedField): void {
    this.extendedFieldSelect.emit(extendedField);
  }

  comparedWithId(item1: { id: number }, item2: { id: number }) {
    if (item2 === item1) {
      return true;
    }

    if (Utils.isDefined(item1) && Utils.isDefined(item2)) {
      return item1.id === item2.id;
    }

    return false;
  }

}
