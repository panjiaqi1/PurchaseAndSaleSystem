// import { Component, forwardRef, OnInit } from '@angular/core';
// import { Utils } from '../../../core/utils';
// import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
//
// /**
//  * 类别选择组件
//  */
// @Component({
//   selector: 'app-category-select',
//   templateUrl: './category-select.component.html',
//   styleUrls: ['./category-select.component.less'],
//   providers: [
//     {
//       provide: NG_VALUE_ACCESSOR,
//       useExisting: forwardRef(() => CategorySelectComponent),
//       multi: true,
//     },
//   ]
// })
// export class CategorySelectComponent implements OnInit, ControlValueAccessor {
//   categories: Category[];
//
//   control: FormControl = new FormControl();
//   changeFn = new Array<(value: any) => void>();
//   touchedFn = new Array<() => void>();
//
//   constructor(private categoryService: CategoryService) {
//   }
//
//   ngOnInit() {
//     this.getAll();
//     // 当类别变化通知外部
//     this.control.valueChanges.subscribe((ob: Category) => {
//       this.changeFn.forEach((fn) => {
//         fn(ob);
//       });
//       this.touchedFn.forEach((fn) => {
//         fn();
//       });
//     });
//   }
//
//   /**
//    * 获取所有类别
//    */
//   getAll() {
//     this.categoryService.getAll()
//       .subscribe((categories: Category[]) => {
//         this.categories = categories;
//       });
//   }
//
//   /**
//    * 判断是否相同
//    * 用于默认选中
//    */
//   comparedWithId(item1: { id: number }, item2: { id: number }) {
//     if (item2 === item1) {
//       return true;
//     }
//     if (Utils.isDefined(item1) && Utils.isDefined(item2)) {
//       return item1.id === item2.id;
//     }
//     return false;
//   }
//
//   writeValue(obj: any): void {
//     this.control.setValue(obj);
//   }
//
//   registerOnChange(fn: any): void {
//     this.changeFn.push(fn);
//   }
//
//   registerOnTouched(fn: any): void {
//     this.touchedFn.push(fn);
//   }
//
//   setDisabledState?(isDisabled: boolean): void {
//     console.warn('setDisabledState Method not implemented.');
//   }
//
// }
