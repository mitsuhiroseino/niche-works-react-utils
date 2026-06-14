export type UsePreviousValueOptions<T = any> = {
  /**
   * 初期値
   */
  initialValue?: T;

  /**
   * 値の比較関数
   * falseの場合に値を更新する
   * 未指定の場合は`===`で比較
   * @param oldValue
   * @param newValue
   * @returns
   */
  isEqual?: (oldValue: T | undefined, newValue: T) => boolean;
};
