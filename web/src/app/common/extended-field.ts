import { GoodExtendedField } from './good-extended-field';

/**
 * 扩展字段定义
 */
export class ExtendedField {
  /** id */
  id: number;

  /** 名称 */
  name: string;

  /** 扩展字段记录 */
  goodExtendedFieldList: Array<GoodExtendedField>;

  constructor(data?: { id?: number, name?: string, goodExtendedFieldList?: Array<GoodExtendedField> }) {
    if (data) {
      if (data.id) {
        this.id = data.id;
      }

      if (data.name) {
        this.name = data.name;
      }

      if (data.goodExtendedFieldList) {
        this.goodExtendedFieldList = data.goodExtendedFieldList;
      }
    }
  }
}
