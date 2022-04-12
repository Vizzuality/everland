import { CSS } from '@stitches/react'
import { ComponentProps } from 'react'
import { ColorTokens, styled, theme } from 'stitches.config'

const color = Object.keys(theme.colors).reduce((acc, color) => {
  return { ...acc, [color]: { '&': { color: `$${color}` } } }
}, {}) as { [key in ColorTokens]: CSS }
// const size = Object.keys(theme.fontSizes).reduce((acc, fontSize) => {
//   return { ...acc, [fontSize]: { '&': { fontSize: `$${fontSize}`, lineHeight: `$${fontSize}` } } }
// }, {}) as { [key in keyof typeof theme.fontSizes]: any }

export const Text = styled('span', {
  lineHeight: 1,
  margin: 0,
  fontVariantNumeric: 'tabular-nums',

  variants: {
    color,
    size: {
      h1: {
        fontSize: '$h1',
        lineHeight: '$h1',
        letterSpacing: '$h1',
      },
      body: {
        fontSize: '16px',
        lineHeight: '21.66px',
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

  defaultVariants: {
    weight: 'regular',
    family: 'primary',
    color: 'neutral-black',
  },
})

Text.displayName = 'Text'

export type TextProps = ComponentProps<typeof Text>
