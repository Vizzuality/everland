import { Text } from 'components/Text'
import Image from 'next/image'
import { Header, HeaderContent, Hero, Logo, ProjectsRoot, ScrollDown } from './Projects.styles'
import * as logo from '../../../../../public/images/common/logo.svg'
import { Container } from 'containers/components/Container/Container'
import { Icon } from 'components/Icon'
import { Spacer } from 'components/Spacer/Spacer.styles'
import { ImagesGallery } from './components/ImagesGallery'
import { Overlay } from 'components/Overlay/Overlay.styles'
import { Section } from 'components/Section/Section.styles'

export const Projects = () => {
  return (
    <ProjectsRoot>
      <Header>
        <Container>
          <HeaderContent>
            <Logo>
              <Image src={logo} alt="Logo" />
            </Logo>
            <nav>
              <Text color="neutral-white">PROJECT</Text>
              <Text color="neutral-white">CONTACT US</Text>
              <Text color="neutral-white">ABOUT US</Text>
            </nav>
          </HeaderContent>
        </Container>
      </Header>
      <Section>
        <Hero>
          <Overlay />
          <Text as="h1" size="h1" weight="bold" color="neutral-white">
            Keo Seima
          </Text>
          <Text color="neutral-white" family="secondary" fontStyle="italic">
            Cambodia
          </Text>

          <Spacer space="8" direction="column" />

          <ScrollDown>
            <Text color="neutral-white">SCROLL DOWN</Text>

            <Icon name="arrow-down-line" color="neutral-white" />
          </ScrollDown>
        </Hero>
      </Section>
      <Section>
        <ImagesGallery />
      </Section>
    </ProjectsRoot>
  )
}
