import { styled, theme } from 'stitches.config'

const space = Object.keys(theme.space).reduce(
  (acc, cv) => ({
    ...acc,
    [cv]: { $$space: `$space$${cv}` },
  }),
  { 0: { $$space: 0 } },
)

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
