import type { InternalCSS } from '@stitches/react'
// This fixes a problem with Emotion polluting the global scope through Storybook.
// We need to override the "css" prop types manually until Storybook upgrades to Emotion 11
//
// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/31245#issuecomment-780019806
declare module 'react' {
  interface DOMAttributes<T> {
    css?: InternalCSS
  }
}
declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      css?: InternalCSS
    }
  }
}

declare global {
  interface Window {
    dataLayer: Record<string, any>[]
  }
}
