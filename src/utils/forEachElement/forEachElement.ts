import type { ReactElement, ReactNode } from 'react';
import _traverseElement from '../../_helpers/_traverseElement';

/**
 * React.Fragmentを透過し、children内のReactElementを処理する
 * @param children エレメントの子要素
 * @param callback コールバック
 */
export default function forEachElement(
  children: ReactNode,
  callback: (node: ReactElement, index: number) => void,
): void {
  _traverseElement(children, callback);
}
