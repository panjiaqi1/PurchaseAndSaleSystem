import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Utils } from '../../../core/utils';
import { GoodService } from '../../../core/service/good.service';
import { Good } from '../../../common/good';

@Component({
  selector: 'app-good-select',
  templateUrl: './good-select.component.html',
  styleUrls: ['./good-select.component.less']
})
export class GoodSelectComponent implements OnInit {

  private innerGood: Good;

  goods: Array<Good>;

  @Input()
  set good(value: Good) {
    this.innerGood = value;
  }

  get good(): Good {
    return this.innerGood;
  }

  constructor(private goodService: GoodService) {
  }

  @Output()
  goodSelect: EventEmitter<Good> = new EventEmitter();

  ngOnInit() {
    this.getAllGood();
    this.innerGood = null;
  }

  public getAllGood() {
    this.goodService.getAll().subscribe((data: Array<Good>) => {
      this.goods = data;
    });
  }

  public change(good: Good): void {
    this.goodSelect.emit(good);
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
