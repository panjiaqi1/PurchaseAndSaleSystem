/**
 * 获取随即字符串
 * @param length  长度
 */
export function randomStringByLength(length: number): string {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export class Utils {

  /**
   * 判断变量是否被定义
   * @param value 被定义true,否则false
   */
  static isDefined<T>(value: T | undefined | null): value is T {
    return value as T !== undefined && value as T !== null;
  }
}

/**
 * 断言工具
 */
export class Assert {
  /**
   * 介于两个数之间（大于等于小的且小于等于大的）
   * @param value 要比较的数值
   * @param begin 小数
   * @param end 大数
   * @param message 消息
   */
  static isBetween(value: number, begin: number, end: number, message) {
    if (begin > end) {
      const temp = end;
      end = begin;
      begin = temp;
    }
    if (value < begin || value > end) {
      throw  new Error(message);
    }
  }

  static isDefined(value: any, message: string): void {
    if (!Utils.isDefined(value)) {
      throw new Error(message);
    }
  }

  /**
   * 比某个数大
   * @param value 数
   * @param target 目标数
   * @param message 信息
   */
  static greatThan(value: number, target: number, message: string) {
    if (value <= target) {
      throw new Error(message);
    }
  }

  /**
   * 参数类型是否为number
   * @param value 值
   * @param message 消息
   */
  static isNumber(value: any, message: string) {
    if (!Utils.isDefined(value) || !Number.isInteger(value)) {
      throw new Error(message);
    }
  }

  /**
   * 比某个数小
   * @param value 数
   * @param message 消息
   */
  static smallThan(value: number, target: number, message: string) {
    if (value >= target) {
      throw new Error(message);
    }
  }
}
