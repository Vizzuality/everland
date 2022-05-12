import { CSS } from '@stitches/react'
import { styled, theme, SpaceTokens } from 'stitches.config'

const space = Object.keys(theme.space).reduce(
  (acc, cv) => ({
    ...acc,
    [cv]: { $$space: `$space$${cv}` },
  }),
  {},
) as { [key in SpaceTokens]: CSS }

export const Spacer = styled('div', {
  variants: {
    space: {
      ...space,
      0: {
        $$space: 0,
      },
    },
    direction: {
      row: {
        display: 'inline-block',
        width: '$$space',
      },
      column: {
        height: '$$space',
      },
    },
  },

  defaultVariants: {
    space: '1',
    direction: 'row',
  },
})
