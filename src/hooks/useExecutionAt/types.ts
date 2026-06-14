import type { MarkAtResult } from '../../utils/markAt';

/**
 * オプション
 */
export type UseExecutionAtOptions<P = void> = {
  /**
   * ペイロードの初期値
   */
  initialPayload?: P;
};

/**
 * 戻り値
 */
export type UseExecutionAtResult<P = void> = readonly [
  ExecutionRequest<P>,
  ExecutionFunction<P>,
];

/**
 * 実行時の状態を表す値
 */
export type ExecutionRequest<P = void> = {
  /**
   * 実行された時間
   */
  readonly at: MarkAtResult;

  /**
   * ペイロード
   */
  readonly payload: P;
};

/**
 * 処理実行用関数
 */
export type ExecutionFunction<P = void> = (payload?: P) => void;
