/**
 * 菜单实体
 */
export class Menu {
  static ROLE_ADMIN = 0;
  static ROLE_INPUT_PRODUCT = 1;
  /** 名称 */
  name: string;

  /** 路由 */
  url = '';

  icon: string;

  roles = [Menu.ROLE_ADMIN];


  constructor(data?: { name?: string, url?: string, roles?: number[], icon?: string }) {
    if (data) {
      if (data.name) {
        this.name = data.name;
      }

      if (data.url) {
        this.url = data.url;
      }

      if (data.roles) {
        this.roles = data.roles;
      }

      if (data.icon) {
        this.icon = data.icon;
      }
    }
  }
}
