import { styled, theme, SpaceTokens } from 'stitches.config'

const space = Object.keys(theme.space).reduce(
  (acc, cv) => ({
    ...acc,
    [cv]: { $$space: `$space$${cv}` },
  }),
  { 0: { $$space: 0 } },
) as { [key in SpaceTokens | '0']: any }

export const Spacer = styled('div', {
  variants: {
    space,
    direction: {
      row: {
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
