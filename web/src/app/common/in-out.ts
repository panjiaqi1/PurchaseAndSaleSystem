import { Good } from './good';
import { User } from './user';

/**
 * 进出库
 */
export class InOut {
  /** id */
  id: number;

  /** 数量 */
  amount: number;

  /** 时间 */
  createTime: string;

  /**
   * 出库/入库
   * 0-出库
   * 1-入库
   */
  inputOrOutput: number;

  /** 货物 */
  good: Good;

  /** 用户 */
  user: User;

  constructor(data?: {
    id?: number, amount?: number,
    createTime?: string, inputOrOutput?: number, good?: Good
  }) {
    if (data) {
      if (data.id) {
        this.id = data.id;
      }

      if (data.amount) {
        this.amount = data.amount;
      }

      if (data.createTime) {
        this.createTime = data.createTime;
      }

      if (data.inputOrOutput) {
        this.inputOrOutput = data.inputOrOutput;
      }

      if (data.good) {
        this.good = data.good;
      }
    }
  }
}
