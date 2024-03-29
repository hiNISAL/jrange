/**
 * jrange
 * range function of Python implemented using JavaScript.
 * @number start
 * @number end
 * @number step
 * @returns number[]
 */
export default function (start?: number, end?: number, step: number = 1): number[] {
  if (arguments.length === 0) {
    return [];
  }

  if (arguments.length === 1) {
    end = start;
    start = 0;
  }

  // 如果步长是0
  // 这种情况错误 返回空
  if (step === 0) {
    return [];
  }

  // 起始和结束相等 则返回空
  if (start === end) {
    return [];
  }

  // 如果起始比结束大 并且步长为正数
  // 这种情况是错误的 因为会进入无限循环
  if (start! > end! && step >= 0) {
    return [];
  }

  // 如果起始比结束小 并且步长为负数
  // 这种情况是错误的 因为会进入无限循环
  if (start! < end! && step <= 0) {
    return [];
  }

  const res = [];

  for (let i = start!; i < end!; i += step) {
    res.push(i);
  }

  return res;
}