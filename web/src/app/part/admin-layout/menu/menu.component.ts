import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../../core/service/menu.service';
import { Menu } from '../../../common/menu';
import { Assert } from '../../../core/utils';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  menus: Menu[] = [];

  constructor(private menuService: MenuService) {
  }

  ngOnInit() {
    // 获取所有的菜单
    this.menuService.getAll().subscribe((menus: Menu[]) => {
      menus.forEach((menu: Menu) => {
        Assert.isDefined(menu.url, '菜单路径未定义');
      });
      this.menus = menus;
    });
  }

}
