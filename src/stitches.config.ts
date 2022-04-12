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
      'primary-jasper-100': '#FCEBDA',
      'primary-jasper-200': '#FAD2B7',
      'primary-jasper-300': '#F0AF90',
      'primary-jasper-400': '#E28D71',
      'primary-jasper-500': '#D05D45',
      'primary-jasper-600': '#B23E32',
      'primary-jasper-700': '#952522',
      'primary-jasper-800': '#78161B',
      'primary-jasper-900': '#630D18',
      'primary-jasper-default': '#D05D45',

      'primary-tuna-100': '#EBEDF5',
      'primary-tuna-200': '#D8DCEC',
      'primary-tuna-300': '#AEB2C6',
      'primary-tuna-400': '#787C8E',
      'primary-tuna-500': '#363844',
      'primary-tuna-600': '#27293A',
      'primary-tuna-700': '#1B1D30',
      'primary-tuna-800': '#111327',
      'primary-tuna-900': '#0A0C20',
      'primary-tuna-default': '#363844',

      'secondary-grey-100': '#F8F9F6',
      'secondary-grey-200': '#F2F3EE',
      'secondary-grey-300': '#DADDD6',
      'secondary-grey-400': '#B8BCB4',
      'secondary-grey-500': '#8C9088',
      'secondary-grey-600': '#6E7B63',
      'secondary-grey-700': '#526744',
      'secondary-grey-800': '#39532B',
      'secondary-grey-900': '#27451A',
      'secondary-grey-default': '#8C9088',

      'secondary-green-100': '#D1F4CC',
      'secondary-green-200': '#9EEA9C',
      'secondary-green-300': '#60C067',
      'secondary-green-400': '#31813E',
      'secondary-green-500': '#082E12',
      'secondary-green-600': '#052711',
      'secondary-green-700': '#042111',
      'secondary-green-800': '#021A0F',
      'secondary-green-900': '#01160E',
      'secondary-green-default': '#082E12',

      'neutral-white': '#FFFFFF',
      'neutral-light-beige': '#FFF9ED',
      'neutral-dark-beige': '#EADDC3',
      'neutral-dark-grey': '#393939',
      'neutral-black': '#111111',
    },
    space: {
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '32px',
      9: '36px',
      10: '40px',
      11: '44px',
      12: '48px',
      13: '52px',
      14: '56px',
      15: '60px',
      16: '64px',
      17: '68px',
      18: '72px',
      19: '76px',
      20: '80px',
      21: '84px',
      22: '88px',
      23: '92px',
      24: '96px',
      25: '100px',
    },
    fontSizes: {
      h1: '80px',
    },
    lineHeights: {
      h1: '80px',
    },
    letterSpacings: {
      h1: '-2.4%',
    },
    fonts: {
      primary: 'StagSans',
      secondary: 'Cardo',
    },
    fontWeights: {
      thin: 300,
      regular: 400,
      bold: 700,
    },
    sizes: {
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '32px',
      9: '36px',
      10: '40px',
      11: '44px',
      12: '48px',
      13: '52px',
      14: '56px',
      15: '60px',
      16: '64px',
      17: '68px',
      18: '72px',
      19: '76px',
      20: '80px',
      21: '84px',
      22: '88px',
      23: '92px',
      24: '96px',
      25: '100px',
    },
    borderWidths: {},
    borderStyles: {},
    radii: {},
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
    size: (value: string) => ({
      width: value,
      height: value,
    }),
    px: (value: string) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: string) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    pt: (value: string) => ({
      paddingTop: value,
    }),
    pl: (value: string) => ({
      paddingLeft: value,
    }),
    pr: (value: string) => ({
      paddingRight: value,
    }),
    pb: (value: string) => ({
      paddingBottom: value,
    }),
    mx: (value: string) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: string) => ({
      marginTop: value,
      marginBottom: value,
    }),
    mt: (value: string) => ({
      marginTop: value,
    }),
    mr: (value: string) => ({
      marginRight: value,
    }),
    ml: (value: string) => ({
      marginLeft: value,
    }),
    mb: (value: string) => ({
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
  '@font-face': [
    {
      fontFamily: 'StagSans',
      fontWeight: 300,
      src: 'url("fonts/stag-sans/StagSans-thin.ttf")',
    },
    {
      fontFamily: 'StagSans',
      fontWeight: 400,
      src: 'url("fonts/stag-sans/StagSans-Regular.ttf")',
    },
    {
      fontFamily: 'StagSans',
      fontWeight: 700,
      src: 'url("fonts/stag-sans/StagSans-Bold.ttf")',
    },
    {
      fontFamily: 'Cardo',
      fontWeight: 300,
      src: 'url("fonts/cardo/Cardo-Bold.ttf")',
    },
  ],
})

export type ColorTokens = keyof typeof theme.colors
export type SizeTokens = keyof typeof theme.sizes
export type SpaceTokens = keyof typeof theme.space
export type MediaTokens = keyof typeof media

export type FlattenVariant<A> = FilterUnion<A, string>
