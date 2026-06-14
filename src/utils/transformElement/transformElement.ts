import type { ReactElement, ReactNode } from 'react';
import _traverseElement from '../../_helpers/_traverseElement';

/**
 * React.Fragmentを透過し、children内のReactElementをcallbackで処理した戻り値を返す
 * @param children エレメントの子要素
 * @param callback コールバック
 */
export default function transformElement<T>(
  children: ReactNode,
  callback: (node: ReactElement, index: number) => T,
): T[] {
  const result: T[] = [];
  _traverseElement(children, callback, (node) => result.push(node));
  return result;
}
