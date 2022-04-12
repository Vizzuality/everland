import { CSS } from '@stitches/react'
import { ComponentProps } from 'react'
import { styled, theme, ColorTokens, SizeTokens } from 'stitches.config'
import type { IconName } from './iconNames'

const size = Object.keys(theme.sizes).reduce(
  (acc, cv) => ({
    ...acc,
    [cv]: { size: `$${cv}` },
  }),
  {},
) as { [key in SizeTokens]: CSS } // TODO: Use InternalCSS

const IconRoot = styled('svg', {
  width: '$sm',
  height: '$sm',
  flexShrink: 0,
  flexGrow: 0,
  fill: 'currentColor',
  variants: {
    size,
  },
  defaultVariants: {
    size: '6',
  },
})

type IconOwnProps = ComponentProps<typeof IconRoot>
export type IconProps = IconOwnProps & {
  name: IconName
  color?: ColorTokens
  label?: string
}

export const Icon = ({ name, label, color, css, ...props }: IconProps) => {
  return (
    <IconRoot
      css={{ fill: color ? `$${color}` : undefined, ...css }}
      role={label ? 'img' : 'presentation'}
      data-testid={`icon-${name}`}
      {...props}
    >
      {label && <title>{label}</title>}
      <use xlinkHref={`/icon-sprite.svg#${name}`} />
    </IconRoot>
  )
}
