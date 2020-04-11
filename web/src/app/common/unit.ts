
/**
 * 单位实体
 */
export class Unit {
  /** id */
  id: number;

  /** 单位名称 */
  name: string;

  constructor(data?: { id?: number, name?: string, }) {
    if (data) {
      if (data.id) {
        this.id = data.id;
      }

      if (data.name) {
        this.name = data.name;
      }
    }
  }
}
