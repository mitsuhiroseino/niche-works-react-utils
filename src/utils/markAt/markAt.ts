import type { MarkAtResult } from './types';

/**
 * 実行時点の時間を返す
 * @returns
 */
export default function markAt(): MarkAtResult {
  return Date.now();
}
