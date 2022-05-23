import { ComponentProps } from '@stitches/react'
import { ScrollToTop } from 'components/ScrollToTop/ScrollToTop'
import { SpaceTokens } from 'stitches.config'
import { SectionRoot } from './Section.styles'

type SectionOwnProps = ComponentProps<typeof SectionRoot>
export type SectionProps = SectionOwnProps & {
  scrollToTop?: boolean
  scrollDistance?: SpaceTokens
}

export const Section = ({
  scrollToTop = true,
  scrollDistance = '14',
  children,
  ...rest
}: SectionProps) => {
  return (
    <SectionRoot {...rest}>
      <div>{children}</div>
      {scrollToTop && <ScrollToTop scrollDistance={scrollDistance} />}
    </SectionRoot>
  )
}
