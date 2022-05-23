import { ComponentProps } from '@stitches/react'
import { Icon } from 'components/Icon'
import { Spacer } from 'components/Spacer'
import { Text } from 'components/Text'
import { Container } from 'containers/components/Container/Container'
import { SpaceTokens } from 'stitches.config'
import { ScrollToTopButton } from './ScrollToTop.styles'

type ScrollToTopOwnProps = ComponentProps<typeof ScrollToTopButton>
export type ScrollToTopProps = ScrollToTopOwnProps & {
  scrollDistance?: SpaceTokens
}

export const ScrollToTop = ({ scrollDistance = '14', ...rest }: ScrollToTopProps) => {
  return (
    <Container>
      <Spacer direction="column" space={scrollDistance} />

      <ScrollToTopButton onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} {...rest}>
        <Text color="currentColor" size="caption2">
          BACK TO TOP
        </Text>
        <Spacer space="3" />

        <Icon name="arrow-up-circle" />
      </ScrollToTopButton>
    </Container>
  )
}
