import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { Utils } from '../../../core/utils';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Unit } from '../../../common/unit';
import { UnitService } from '../../../core/service/unit.service';

/**
 * 单位选择组件
 */
@Component({
  selector: 'app-unit-select',
  templateUrl: './unit-select.component.html',
  styleUrls: ['./unit-select.component.less'],
})
export class UnitSelectComponent implements OnInit {

  private innerUnit: Unit;

  units: Array<Unit>;

  @Input()
  set unit(value: Unit) {
    this.innerUnit = value;
  }

  get unit(): Unit {
    return this.innerUnit;
  }

  constructor(private unitService: UnitService) {
  }

  @Output()
  unitSelect: EventEmitter<Unit> = new EventEmitter();

  ngOnInit() {
    this.getAllUnit();
    this.innerUnit = null;
  }

  public getAllUnit() {
    this.unitService.getAll().subscribe((data: Array<Unit>) => {
      this.units = data;
    });
  }

  public change(unit: Unit): void {
    this.unitSelect.emit(unit);
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
