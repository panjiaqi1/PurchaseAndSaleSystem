import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

/**
 * 分页大小（每页显示条数）
 * Input 输入size（设置每页显示条数默认值）
 * Output 输出size （要设置的每页显示条数）
 *
 */
@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.less']
})
export class SizeComponent implements OnInit {


  sizes: Array<number> = [3, 5, 10, 20];

  @Input()
  size: number;

  @Output()
  changeSize: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  sizeChange(size: number): void {
    this.changeSize.emit(size);
  }
}
