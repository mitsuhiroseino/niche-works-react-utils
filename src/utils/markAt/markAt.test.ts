import { describe, expect, it } from 'vitest';
import markAt from './markAt';

describe('markAt', () => {
  it('呼び出す度に増加する値を返す', () => {
    const first = markAt();
    const second = markAt();
    const third = markAt();

    expect(second).toBeGreaterThan(first);
    expect(third).toBeGreaterThan(second);
  });

  it('連続で呼び出しても値が重複しない', () => {
    const values = Array.from({ length: 1000 }, () => markAt());
    const uniqueValues = new Set(values);

    expect(uniqueValues.size).toBe(values.length);
  });
});
