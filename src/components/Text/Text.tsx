import { CSS } from '@stitches/react'
import { ComponentProps } from 'react'
import { ColorTokens, styled, theme } from 'stitches.config'

const color = Object.keys(theme.colors).reduce((acc, color) => {
  return { ...acc, [color]: { '&': { color: `$${color}` } } }
}, {}) as { [key in ColorTokens]: CSS }

export const Text = styled('span', {
  lineHeight: 1,
  margin: 0,
  fontVariantNumeric: 'tabular-nums',

  variants: {
    color: {
      ...color,
      currentColor: {
        '&': { color: 'currentColor' },
      },
    },
    size: {
      heroTitle1: {
        fontSize: '$hero1Mobile',
        lineHeight: '$hero1Mobile',

        '@bp2': {
          fontSize: '$hero1',
          lineHeight: '$hero1',
        },
      },
      heroTitle2: {
        fontSize: '$hero2Mobile',
        lineHeight: '$hero2Mobile',

        '@bp2': {
          fontSize: '$hero2',
          lineHeight: '$hero2',
        },
      },
      heroTitle3: {
        fontSize: '$hero3Mobile',
        lineHeight: '$hero3Mobile',

        '@bp2': {
          fontSize: '$hero3',
          lineHeight: '$hero3',
        },
      },
      heroTitle4: {
        fontSize: '$hero4Mobile',
        lineHeight: '$hero4Mobile',

        '@bp2': {
          fontSize: '$hero4',
          lineHeight: '$hero4',
        },
      },
      h1: {
        fontSize: '$h1Mobile',
        lineHeight: '$h1Mobile',

        '@bp2': {
          fontSize: '$h1',
          lineHeight: '$h1',
        },
      },
      h2: {
        fontSize: '$h2Mobile',
        lineHeight: '$h2Mobile',

        '@bp2': {
          fontSize: '$h2',
          lineHeight: '$h1',
        },
      },
      h3: {
        fontSize: '$h3Mobile',
        lineHeight: '$h3Mobile',

        '@bp2': {
          fontSize: '$h3',
          lineHeight: '$h3',
        },
      },
      subtitle1: {
        fontSize: '$subtitle1Mobile',
        lineHeight: '$subtitle1Mobile',

        '@bp2': {
          fontSize: '$subtitle1',
          lineHeight: '$subtitle',
        },
      },
      subtitle2: {
        fontSize: '$subtitle2Mobile',
        lineHeight: '$subtitleMobile',

        '@bp2': {
          fontSize: '$subtitle2',
          lineHeight: '$subtitle',
        },
      },
      subtitle3: {
        fontSize: '$subtitle3Mobile',
        lineHeight: '$subtitleMobile',

        '@bp2': {
          fontSize: '$subtitle3',
          lineHeight: '$subtitle',
        },
      },
      subtitle4: {
        fontSize: '$subtitle4Mobile',
        lineHeight: '$subtitle4Mobile',

        '@bp2': {
          fontSize: '$subtitle4',
          lineHeight: '$subtitle',
        },
      },
      body1: {
        fontSize: '$body1',
        lineHeight: '$body1',
      },
      body2: {
        fontSize: '$body2',
        lineHeight: '$body2',
      },
      caption1: {
        fontSize: '$caption1',
        lineHeight: '$caption1',
      },
      caption2: {
        fontSize: '$caption2',
        lineHeight: '$caption2',
      },
    },
    family: {
      primary: {
        fontFamily: '$primary',
      },
      secondary: {
        fontFamily: '$secondary',
      },
    },
    fontStyle: {
      italic: {
        fontStyle: 'italic',
      },
    },
    weight: {
      regular: {
        fontWeight: '$regular',
      },
      semibold: {
        fontWeight: '$semibold',
      },
      bold: {
        fontWeight: '$bold',
      },
      thin: {
        fontWeight: '$thin',
      },
    },

    align: {
      left: {
        textAlign: 'left',
      },
      center: {
        textAlign: 'center',
      },
      right: {
        textAlign: 'right',
      },
    },

    truncate: {
      true: {
        maxWidth: '100%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },
    },
    lineThrough: {
      true: {
        textDecoration: 'line-through',
        textDecorationColor: 'currentColor',
        textDecorationThickness: '3px',
      },
    },
  },

  compoundVariants: [
    {
      size: 'h2',
      weight: 'bold',
      css: {
        lineHeight: '$h2',
      },
    },
    {
      size: 'h2',
      fontStyle: 'italic',
      css: {
        lineHeight: '$h2',
      },
    },
    {
      size: 'body1',
      weight: 'bold',
      css: {
        lineHeight: '$body1bold',
      },
    },
  ],

  defaultVariants: {
    weight: 'regular',
    family: 'primary',
    color: 'neutral-black',
  },
})

Text.displayName = 'Text'

export type TextProps = ComponentProps<typeof Text>
