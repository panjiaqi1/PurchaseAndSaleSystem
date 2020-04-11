/**
 * 用户实体
 */
export class User {

  /** id */
  id: number;

  /** 用户名 */
  username: string;

  /** 密码 */
  password: string;

  /** 角色 */
  role: number;

  constructor(data?: { id?: number, username?: string, password?: string, role?: number }) {
    if (data) {
      if (data.id) {
        this.id = data.id;
      }

      if (data.username) {
        this.username = data.username;
      }

      if (data.password) {
        this.password = data.password;
      }

      if (data.role) {
        this.role = data.role;
      }
    }

  }
}
