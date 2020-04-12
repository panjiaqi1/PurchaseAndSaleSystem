import { Unit } from './unit';
import { GoodExtendedField } from './good-extended-field';
import { InOut } from './in-out';

/**
 * 货物实体
 */
export class Good {
  /** id */
  id: number;

  /** 货物名称 */
  name: string;

  /** 描述 */
  description: string;

  /** 库存 */
  stock: number;

  /** 单位 */
  unit: Unit;

  /** 进出库 */
  inOutList: Array<InOut>;

  /** 扩展字段记录 */
  goodExtendedFieldList: Array<GoodExtendedField>;

  constructor(data?: {
    id?: number, name?: string,
    description?: string, stock?: number,
    unit?: Unit, inOutList?: Array<InOut>,
    goodExtendedFieldList: Array<GoodExtendedField>
  }) {
    if (data) {
      if (data.id) {
        this.id = data.id;
      }

      if (data.name) {
        this.name = data.name;
      }

      if (data.description) {
        this.description = data.description;
      }

      if (data.stock) {
        this.stock = data.stock;
      }

      if (data.unit) {
        this.unit = data.unit;
      }

      if (data.inOutList) {
        this.inOutList = data.inOutList;
      }

      if (data.goodExtendedFieldList) {
        this.goodExtendedFieldList = data.goodExtendedFieldList;
      }
    }
  }
}
