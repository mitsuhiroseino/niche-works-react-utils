import type { LooseDictionary } from '@niche-works/types';
import unsafeCast from '@niche-works/utils/type/unsafeCast';
import type { ComponentType, ElementType } from 'react';
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
export default function ensureComponent<
  P extends LooseDictionary = LooseDictionary,
  T extends HTMLElement = HTMLElement,
>(component: ElementType<P>): ComponentType<P> {
  if (typeof component === 'string') {
    const cached = cache.get(component);
    if (cached) {
      return cached;
    }

    const Comp = forwardRef<T, P>((props, ref) => {
      return createElement(component, { ...props, ref });
    });
    Comp.displayName = component;
    cache.set(component, Comp);
    return unsafeCast(Comp);
  }

  return component;
}
