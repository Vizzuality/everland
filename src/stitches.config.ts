import { createStitches } from '@stitches/react'
import { FilterUnion } from 'types/FilterUnion'

const media = {
  mobile: '(min-width: 320px)',
  bp1: '(min-width: 520px)',
  bp2: '(min-width: 900px)',
  bp3: '(min-width: 1200px)',
  bp4: '(min-width: 1800px)',
  motion: '(prefers-reduced-motion)',
  hover: '(any-hover: hover)',
  dark: '(prefers-color-scheme: dark)',
  light: '(prefers-color-scheme: light)',
} as const

export const {
  styled,
  css,
  getCssText,
  config,
  globalCss: stitchesGlobal,
  theme,
  keyframes,
} = createStitches({
  theme: {
    colors: {

    },
    space: {

    },
    fontSizes: {

    },
    lineHeights: {

    },
    fonts: {
      primary: 'StagSans',
      secondary: 'Cardo'
    },
    fontWeights: {
      thin: 300,
      regular: 400,
      bold: 700,
    },
    letterSpacings: {},
    sizes: {

    },
    borderWidths: {},
    borderStyles: {},
    radii: {

    },
    shadows: {},
    zIndices: {
      1: 100,
      2: 200,
      3: 300,
      4: 400,
      max: 999,
    },
    transitions: {},
  },
  media,
  utils: {
    size: (value: any) => ({
      width: value,
      height: value,
    }),
    px: (value: any) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: any) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    mx: (value: any) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: any) => ({
      marginTop: value,
      marginBottom: value,
    }),
  },
})

export const globalStyles = stitchesGlobal({
  '*': {
    boxSizing: 'border-box',
    textDecoration: 'none',
    listStyleType: 'none',
    color: 'inherit',
    padding: 0,
    margin: 0,
  },
  body: {
    fontFamily: '$primary',
  },
  '@font-face': {
    fontFamily: '$primary',
    fontWeight: 300,
    src: 'url("fonts/stag-sans/StagSansThin.ttf")',
  }
})

export type ColorTokens = keyof typeof theme.colors
export type SizeTokens = keyof typeof theme.sizes
export type SpaceTokens = keyof typeof theme.space
export type MediaTokens = keyof typeof media

export type FlattenVariant<A> = FilterUnion<A, string>
