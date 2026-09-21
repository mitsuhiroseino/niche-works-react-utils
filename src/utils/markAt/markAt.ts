import type { MarkAtResult } from './types';

// 直近に払い出した値
let count = 0;

/**
 * 呼び出す度に単調増加する一意な値を返す
 * @returns
 */
export default function markAt(): MarkAtResult {
  count += 1;
  return count;
}
