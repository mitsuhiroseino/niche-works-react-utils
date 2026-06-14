import isIterable from '@niche-works/utils/type/isIterable';
import type { FragmentProps, ReactNode } from 'react';
import { Children, Fragment, isValidElement } from 'react';

/**
 * React.Fragmentを透過し、children内のReactElement、string、numberを処理する
 * @param children エレメントの子要素
 * @param callback コールバック
 * @param collect コールバックの結果を収集する処理
 */
export default function _traverseContent<N, T>(
  children: ReactNode,
  callback: (node: N, index: number) => T,
  collect: (value: T) => void = () => {},
): void {
  Children.forEach(children, (child, index) => {
    if (isValidElement(child)) {
      if (child.type === Fragment) {
        _traverseContent(
          (child.props as FragmentProps).children,
          callback,
          collect,
        );
      } else {
        collect(callback(child as N, index));
      }
    } else if (typeof child === 'string' || typeof child === 'number') {
      collect(callback(child as N, index));
    } else if (isIterable(child)) {
      _traverseContent(child, callback, collect);
    }
  });
}
