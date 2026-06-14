import type { ReactElement, ReactNode } from 'react';
import _traverseContent from '../../_helpers/_traverseContent';

/**
 * React.Fragmentを透過し、children内のReactElement、string、numberをcallbackで処理した戻り値を返す
 * @param children エレメントの子要素
 * @param callback コールバック
 */
export default function transformContent<T>(
  children: ReactNode,
  callback: (node: ReactElement | string | number, index: number) => T,
): T[] {
  const result: T[] = [];
  _traverseContent(children, callback, (node) => result.push(node));
  return result;
}
