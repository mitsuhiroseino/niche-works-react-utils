import { useEffect, useRef, useState } from 'react';
import type { UsePreviousValueOptions } from './types';

// 単純な比較用の関数
const defaultIsEqual = (oldValue, newValue) => oldValue === newValue;

/**
 * 前回の値を返すhook
 * @param value 現在の値
 * @param options オプション
 * @returns 前回の値
 */
export default function usePreviousValue<T = unknown>(
  value: T,
  options: UsePreviousValueOptions<T> = {},
): T | undefined {
  const [prevValue, setPrevValue] = useState(options.initialValue);
  const isEqualRef = useRef(options.isEqual);

  useEffect(() => {
    // isEqualRefを使う前に毎回比較用の関数を設定する
    isEqualRef.current = options.isEqual ?? defaultIsEqual;
  });

  useEffect(() => {
    if (!isEqualRef.current(prevValue, value)) {
      setPrevValue(value);
    }
    // prevValueの変更時には実行させたくないのでlintのワーニングを抑止
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return prevValue;
}
