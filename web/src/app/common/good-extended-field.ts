import { ExtendedField } from './extended-field';
import { Good } from './good';

/**
 * 扩展字段记录
 */
export class GoodExtendedField {
  /** id */
  id: number;

  /** 值 */
  value: string;

  /** 货物 */
  good: Good;

  /** 扩展字段定义 */
  extendedField: ExtendedField;

  constructor(data?: { id?: number, value?: string, good?: Good, extendedField?: ExtendedField }) {
    if (data) {
      if (data.id) {
        this.id = data.id;
      }

      if (data.value) {
        this.value = data.value;
      }

      if (data.good) {
        this.good = data.good;
      }

      if (data.extendedField) {
        this.extendedField = data.extendedField;
      }
    }
  }
}
