import type {
  ComponentProps,
  ComponentPropsWithRef,
  ComponentRef,
  ComponentType,
  ElementType,
} from 'react';
import { createElement, forwardRef } from 'react';

// モジュールスコープでキャッシュを共有する
// 内部実装のためanyを許容
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const cache = new Map<string, ComponentType<any>>();

/**
 * 組み込みタグの場合はコンポーネントに変換して返す
 * @param component 組み込みタグ or コンポーネント
 * @returns コンポーネント
 */
export default function ensureComponent<C extends ElementType>(
  component: C,
): ComponentType<ComponentPropsWithRef<C>> {
  if (typeof component === 'string') {
    const cached = cache.get(component);
    if (cached) {
      return cached;
    }

    const Comp = forwardRef<ComponentRef<C>, ComponentProps<C>>(
      (props, ref) => {
        return createElement(component, { ...props, ref });
      },
    );
    Comp.displayName = `ensureComponent(${component})`;
    cache.set(component, Comp);
    return Comp;
  }

  return component;
}
