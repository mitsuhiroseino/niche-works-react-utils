import { Fragment } from 'react';
import { describe, expect, it } from 'vitest';
import transformElement from './transformElement';

describe('transformElement', () => {
  it('children内の各ReactElementをcallbackで変換した配列を返す', () => {
    const result = transformElement(
      [<div key="a" />, <span key="b" />],
      (node, index) => `${node.type}-${index}`,
    );

    expect(result).toEqual(['div-0', 'span-1']);
  });

  it('Fragmentを透過して中の要素を処理する', () => {
    const result = transformElement(
      <>
        <div key="a" />
        <span key="b" />
      </>,
      (node) => node.type,
    );

    expect(result).toEqual(['div', 'span']);
  });

  it('複数のFragmentが並んでいても、indexが重複せず連番になる', () => {
    const result = transformElement(
      <>
        <Fragment key="f1">
          <div key="a" />
          <span key="b" />
        </Fragment>
        <Fragment key="f2">
          <p key="c" />
        </Fragment>
      </>,
      (_node, index) => index,
    );

    expect(result).toEqual([0, 1, 2]);
  });
});
