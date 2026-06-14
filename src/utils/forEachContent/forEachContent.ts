import type { ReactElement, ReactNode } from 'react';
import _traverseContent from '../../_helpers/_traverseContent';

/**
 * React.Fragmentを透過し、children内のReactElement、string、numberを処理する
 * @param children エレメントの子要素
 * @param callback コールバック
 */
export default function forEachContent(
  children: ReactNode,
  callback: (node: ReactElement | string | number, index: number) => void,
): void {
  _traverseContent(children, callback);
}
