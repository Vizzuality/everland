import Image from 'next/image'
import { Container } from 'containers/components/Container/Container'
import { Section } from 'components/Section/Section.styles'
import { Overlay } from 'components/Overlay/Overlay.styles'
import { Text } from 'components/Text'
import { Icon } from 'components/Icon'
import { Spacer } from 'components/Spacer'
import { ImagesGallery } from './components/ImagesGallery'
import {
  Header,
  HeaderContent,
  Hero,
  IframeContainer,
  Logo,
  ScrollableText,
  ScrollDown,
  SpaceBetween,
} from './Project.styles'

import * as logo from '../../../../../public/images/common/logo.svg'

export const Project = () => {
  return (
    <>
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
          <Text as="h1" size="heroTitle4" weight="bold" color="neutral-white" align="center">
            Keo Seima
          </Text>
          <Text size="h2" color="neutral-white" family="secondary" fontStyle="italic">
            Cambodia
          </Text>

          <Spacer space="8" direction="column" />

          <ScrollDown>
            <Text size="caption2" color="neutral-white">
              SCROLL DOWN
            </Text>

            <Icon name="arrow-down-line" color="neutral-white" />
          </ScrollDown>
        </Hero>
      </Section>
      <Section>
        <Container>
          <SpaceBetween>
            <IframeContainer>
              <iframe
                frameBorder="0"
                src="https://www.globalforestwatch.org/embed/map/geostore/0bf1cdda0d6da36baa6deaba0e3bc761/?analysis=eyJzaG93RHJhdyI6dHJ1ZX0%3D&mainMap=eyJzaG93QW5hbHlzaXMiOnRydWV9&map=eyJjZW50ZXIiOnsibGF0IjozNC4wNDkwMTAwOTcwOTI1NiwibG5nIjo2Ny42OTk1Mjc3NDAwNDEyOX0sInpvb20iOjMuOTI1NzA5NTU3NTkzMDAwNiwiY2FuQm91bmQiOmZhbHNlLCJkYXRhc2V0cyI6W3sib3BhY2l0eSI6MC43LCJ2aXNpYmlsaXR5Ijp0cnVlLCJkYXRhc2V0IjoicHJpbWFyeS1mb3Jlc3RzIiwibGF5ZXJzIjpbInByaW1hcnktZm9yZXN0cy0yMDAxIl19LHsiZGF0YXNldCI6InBvbGl0aWNhbC1ib3VuZGFyaWVzIiwibGF5ZXJzIjpbImRpc3B1dGVkLXBvbGl0aWNhbC1ib3VuZGFyaWVzIiwicG9saXRpY2FsLWJvdW5kYXJpZXMiXSwiYm91bmRhcnkiOnRydWUsIm9wYWNpdHkiOjEsInZpc2liaWxpdHkiOnRydWV9LHsiZGF0YXNldCI6InRyZWUtY292ZXItbG9zcyIsImxheWVycyI6WyJ0cmVlLWNvdmVyLWxvc3MiXSwib3BhY2l0eSI6MSwidmlzaWJpbGl0eSI6dHJ1ZSwidGltZWxpbmVQYXJhbXMiOnsic3RhcnREYXRlIjoiMjAwMi0wMS0wMSIsImVuZERhdGUiOiIyMDIwLTEyLTMxIiwidHJpbUVuZERhdGUiOiIyMDIwLTEyLTMxIn0sInBhcmFtcyI6eyJ0aHJlc2hvbGQiOjMwLCJ2aXNpYmlsaXR5Ijp0cnVlfX1dfQ%3D%3D&mapPrompts=eyJvcGVuIjp0cnVlLCJzdGVwc0tleSI6InN1YnNjcmliZVRvQXJlYSJ9"
              />
            </IframeContainer>
            <ScrollableText>
              <Text size="body1" weight="thin">
                Keo Seima Wildlife Sanctuary (KSWS) is home to more than 950 wild species, including
                75 globally threatened species. It is also the ancestral home of the indigenous
                Bunong people, whose unique culture and beliefs are inseparable from the forest in
                which they live. Originally designated as a protected area in 2002, KSWS is managed
                by the Royal Government of Cambodia's Ministry of Environment, with technical and
                financial support from WCS Cambodia.
              </Text>

              <Spacer direction="column" space="4" />
              <Text size="body1" weight="thin">
                KSWS plays a vital role in the preservation of the region's important and vulnerable
                wildlife, including the world's largest populations of the endangered black-shanked
                douc and yellow-cheeked crested gibbon, as well as a nationally important population
                of Asian elephant and many other species.
              </Text>

              <Spacer direction="column" space="4" />
              <Text size="body1" weight="thin">
                At the same time, it supports the sustainable development of local communities, most
                notably through securing communities legal title to their traditional lands, and
                through the REDD+ Benefit Sharing Mechanism which provides significant funding to
                community-chosen and community-led development projects.
              </Text>

              <Text size="body1" weight="thin">
                Keo Seima Wildlife Sanctuary (KSWS) is home to more than 950 wild species, including
                75 globally threatened species. It is also the ancestral home of the indigenous
                Bunong people, whose unique culture and beliefs are inseparable from the forest in
                which they live. Originally designated as a protected area in 2002, KSWS is managed
                by the Royal Government of Cambodia's Ministry of Environment, with technical and
                financial support from WCS Cambodia.
              </Text>

              <Spacer direction="column" space="4" />
              <Text size="body1" weight="thin">
                KSWS plays a vital role in the preservation of the region's important and vulnerable
                wildlife, including the world's largest populations of the endangered black-shanked
                douc and yellow-cheeked crested gibbon, as well as a nationally important population
                of Asian elephant and many other species.
              </Text>

              <Spacer direction="column" space="4" />
              <Text size="body1" weight="thin">
                At the same time, it supports the sustainable development of local communities, most
                notably through securing communities legal title to their traditional lands, and
                through the REDD+ Benefit Sharing Mechanism which provides significant funding to
                community-chosen and community-led development projects.
              </Text>
            </ScrollableText>
          </SpaceBetween>
        </Container>
      </Section>
      <Section>
        <ImagesGallery />
      </Section>
    </>
  )
}
