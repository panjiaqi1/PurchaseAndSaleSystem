import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.less']
})
export class PageComponent implements OnInit {

  innerTotalElements = 0; // 所有元素

  innerPage = 0; // 当前页

  innerSize = 0; // 每页大小

  innerPageLinkSize = 5; // 显示的分页范围大小

  paginatorRange: number[] = []; // 分页范围

  @Output()
  changePage: EventEmitter<number> = new EventEmitter();

  @Input()
  set totalElements(value: number) {
    this.innerTotalElements = value;
    this.generatePaginator();
  }

  get totalElements() {
    return this.innerTotalElements;
  }

  @Input()
  set page(value: number) {
    this.innerPage = value;
    this.generatePaginator();
  }

  get page() {
    return this.innerPage;
  }

  @Input()
  set size(value: number) {
    this.innerSize = value;
    this.generatePaginator();
  }

  get size() {
    return this.innerSize;
  }

  @Input()
  set pageLinkSize(value: number) {
    this.innerPageLinkSize = value;
    this.generatePaginator();
  } // 分页下标个数

  get pageLinkSize() {
    return this.innerPageLinkSize;
  }

  constructor() {
  }

  ngOnInit() {
    this.generatePaginator();
  }

  // 生成分页范围
  generatePaginator() {
    this.paginatorRange = [];
    const range = this.getStartAndEnd();
    for (let i = range.start; i <= range.end; i++) {
      this.paginatorRange.push(i);
    }
  }

  change(page: number) {
    this.changePage.emit(page);
  }

  // 计算开始和结束的分页下标
  getStartAndEnd(): { start: number, end: number } {
    const totalPage = Math.ceil(this.totalElements / this.size); // 向上取整获取总页数
    const visiblePages = Math.min(totalPage, this.pageLinkSize);  // 计算可显示的页数
    let start = Math.max(0, this.page - Math.floor(visiblePages / 2)); // 从0开始或从中间值开始
    const end = Math.min(totalPage - 1, Math.ceil(start + visiblePages - 1)); // 最大页数或起始页加上可显示的页数
    // 保证间隔为可显示页数
    const interval = this.pageLinkSize - (end - start + 1);
    start = Math.max(0, start - interval);

    /** 当前页超过最大页码时取最后一页 */
    if (this.page > end) {
      this.changePage.emit(end);
    }
    return {start, end};
  }
}
