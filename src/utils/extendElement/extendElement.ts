import type { HTMLAttributes, ReactElement, ReactNode } from 'react';
import { cloneElement } from 'react';

/**
 * classNameとstyleはマージ、それ以外のプロパティはpropsの値で上書きしてcloneElementを実行する
 * @param element エレメント
 * @param overrideProps 新しいエレメントのプロパティをオーバーライドするプロパティ
 * @param children 子要素
 * @returns
 */
export default function extendElement<
  P extends HTMLAttributes<T>,
  T extends HTMLElement,
>(
  element: ReactElement<P>,
  overrideProps?: P,
  ...children: ReactNode[]
): ReactElement<P> {
  const { className: elClassName, style: elStyle, ...elRest } = element.props;
  const {
    className: orClassName,
    style: orStyle,
    ...orRest
  } = overrideProps || {};

  // classNameのマージ
  let className = elClassName;
  if (orClassName != null) {
    className = className ? `${className} ${orClassName}` : orClassName;
  }

  // styleのマージ
  const style = { ...elStyle };
  if (orStyle) {
    for (const key in orStyle) {
      if (orStyle[key] !== undefined) {
        style[key] = orStyle[key];
      }
    }
  }

  // propsのマージ
  const props = { className, style, ...elRest } as P;
  for (const key in orRest) {
    if (orRest[key] !== undefined) {
      props[key] = orRest[key];
    }
  }

  return cloneElement(element, props, ...children);
}
