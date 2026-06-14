import type { CSSProperties } from 'react';

/**
 * CSS変数を許容するCSSProperties
 */
export type CSSPropertiesWithVars = CSSProperties & {
  [key: `--${string}`]: string | number | undefined;
};
