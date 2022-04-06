import { Text } from 'components/Text'
import Image from 'next/image'
import { Header, HeaderContent, Hero, Logo, ProjectsRoot } from './Projects.styles'
import * as logo from '../../../../../public/images/common/logo.svg'
import { Container } from 'containers/components/Container/Container'
import { Icon } from 'components/Icon'

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
      <Hero>
        <Text as="h1" size="h1" weight="bold" color="neutral-white">
          Keo Seima
        </Text>
        <Text color="neutral-white">Cambodia</Text>

        <Text color="neutral-white">SCROLL DOWN</Text>

        <Icon name="arrow-down-line" color="neutral-white" />
      </Hero>
    </ProjectsRoot>
  )
}
