/*
 * @Author: linzeguang
 * @Date: 2022-08-14 13:42:40
 * @LastEditTime: 2022-09-04 21:00:45
 * @LastEditors: linzeguang
 * @Description:
 */
import BigNumber from 'bignumber.js';

/**
 * @name toThousand 千分位格式化
 * @param val 格式化内容
 * @param precision 精度，默认为6
 * @returns 千分位字符串
 */
export function toThousand(val: BigNumber.Value, precision = 6, isRound: false) {
  const num = new BigNumber(val);
  const precisionNum = new BigNumber(num.toFixed(precision, isRound ? undefined : 1));

  BigNumber.config({
    FORMAT: {
      prefix: '',
      decimalSeparator: '.',
      groupSeparator: ',',
      groupSize: 3,
      secondaryGroupSize: 0,
      fractionGroupSeparator: ' ',
      fractionGroupSize: 0,
      suffix: '',
    },
  });

  return precisionNum.toFormat();
}

/**
 * @name encrypt 脱敏处理
 * @param value 加密字符串
 * @param start 头部留存字符，默认4位📖
 * @param end 尾部留存字符数，默认4位
 * @param fill 加密填充字符，默认"."
 * @param fillLength 加密填充字符长度，默认3
 * @returns 脱敏后点字符串
 */
export function encrypt(value: string, start = 6, end = 6, fill = '.', fillLength = 3) {
  if (value === '--') return value;
  if (value) {
    const startStr = value.substring(0, start);
    const endStr = value.substring(value.length - end, value.length);
    const fillStr = new Array(fillLength).fill(fill).join('');
    return `${startStr}${fillStr}${endStr}`;
  }
  return '--';
}
