import { Container } from 'containers/components/Container/Container'
import { Section } from 'components/Section/Section.styles'
import { Overlay } from 'components/Overlay/Overlay.styles'
import { Text } from 'components/Text'
import { Icon } from 'components/Icon'
import { Spacer } from 'components/Spacer'
import { ImagesGallery } from './components/ImagesGallery'
import { InterventionModelTabs } from './components/InterventionModelTabs'
import { ImpactTabs } from './components/ImpactTabs'
import { RelatedProjectsCards } from './components/RelatedProjectsCards'
import { Navbar } from './components/Navbar'

import { data, IMPACT_TABS, INTERVENTION_MODEL_TABS, NAV_SECTIONS } from './constants'

import {
  Hero,
  IframeContainer,
  Impact,
  InterventionModel,
  ScrollableText,
  ScrollDown,
  SpaceBetween,
  RelatedProjects,
  Video,
  ProjectRoot,
  HeroContent,
} from './Project.styles'

import { useRef } from 'react'
import { Header } from 'components/Header'

const { relatedProjects, video } = data

export const Project = () => {
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlayVideo = () => {
    const video = videoRef.current
    video.muted = true
    video.controls = true
    video.play()
  }

  const handleStopVideo = () => {
    const video = videoRef.current
    video.controls = false
    video.load()
  }

  return (
    <ProjectRoot>
      <Section>
        <Hero>
          <Overlay />
          <Header />
          <HeroContent>
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
          </HeroContent>
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
              <Text size="body1">
                Keo Seima Wildlife Sanctuary (KSWS) is home to more than{' '}
                <Text weight="bold">950 wild species,</Text> including 75 globally threatened
                species. It is also the ancestral home of{' '}
                <Text weight="bold">the indigenous Bunong people,</Text> whose unique culture and
                beliefs are inseparable from the forest in which they live. Originally designated as
                a protected area in 2002, KSWS is managed by the{' '}
                <Text weight="bold">Royal Government of Cambodia's Ministry of Environment,</Text>{' '}
                with technical and financial support from <Text weight="bold">WCS Cambodia.</Text>
              </Text>

              <Spacer direction="column" space="4" />
              <Text size="body1">
                KSWS plays a vital role in the preservation of the region's important and vulnerable
                wildlife, including the world's largest populations of the endangered black-shanked
                douc and yellow-cheeked crested gibbon, as well as a nationally important population
                of Asian elephant and many other species.
              </Text>

              <Spacer direction="column" space="4" />
              <Text size="body1">
                At the same time, it supports the sustainable development of local communities, most
                notably through securing communities legal title to their traditional lands, and
                through the REDD+ Benefit Sharing Mechanism which provides significant funding to
                community-chosen and community-led development projects.
              </Text>

              <Spacer direction="column" space="4" />
              <Text size="body1">
                Keo Seima Wildlife Sanctuary (KSWS) is home to more than{' '}
                <Text weight="bold">950 wild species,</Text> including 75 globally threatened
                species. It is also the ancestral home of{' '}
                <Text weight="bold">the indigenous Bunong people,</Text> whose unique culture and
                beliefs are inseparable from the forest in which they live. Originally designated as
                a protected area in 2002, KSWS is managed by the{' '}
                <Text weight="bold">Royal Government of Cambodia's Ministry of Environment,</Text>{' '}
                with technical and financial support from <Text weight="bold">WCS Cambodia.</Text>
              </Text>

              <Spacer direction="column" space="4" />
              <Text size="body1">
                KSWS plays a vital role in the preservation of the region's important and vulnerable
                wildlife, including the world's largest populations of the endangered black-shanked
                douc and yellow-cheeked crested gibbon, as well as a nationally important population
                of Asian elephant and many other species.
              </Text>

              <Spacer direction="column" space="4" />
              <Text size="body1">
                At the same time, it supports the sustainable development of local communities, most
                notably through securing communities legal title to their traditional lands, and
                through the REDD+ Benefit Sharing Mechanism which provides significant funding to
                community-chosen and community-led development projects.
              </Text>
            </ScrollableText>
          </SpaceBetween>
        </Container>
      </Section>

      <Section id={NAV_SECTIONS[0].name}>
        <ImagesGallery />
      </Section>

      <Section
        id={NAV_SECTIONS[1].name}
        onScrollCapture={(data) => console.log(data, NAV_SECTIONS[1].name)}
      >
        <Container>
          <InterventionModel>
            <Text size="h3" weight="bold" color="primary-tuna-500">
              Intervention model
            </Text>

            <Spacer direction="column" space="10" />
            <InterventionModelTabs tabs={INTERVENTION_MODEL_TABS} />
          </InterventionModel>
        </Container>
      </Section>

      <Section id={NAV_SECTIONS[2].name}>
        <Container>
          <Impact>
            <Text size="h3" weight="bold" color="primary-tuna-500">
              Impact
            </Text>

            <Spacer direction="column" space="10" />
            <ImpactTabs tabs={IMPACT_TABS} />
          </Impact>
        </Container>
      </Section>

      <Section>
        <Container>
          <Video
            poster="../../../images/projects/video-poster-play.jpg"
            ref={videoRef}
            onMouseLeave={handleStopVideo}
            onMouseEnter={handlePlayVideo}
          >
            <source src={video} type="video/mp4" />
          </Video>
        </Container>
      </Section>

      <Section>
        <RelatedProjects>
          <Container>
            <Text size="body1" weight="bold" color="neutral-light-beige">
              Discover other projects:
            </Text>
          </Container>
          <Spacer direction="column" space="10" />

          <RelatedProjectsCards relatedProjects={relatedProjects} />
        </RelatedProjects>
      </Section>

      <Navbar sections={NAV_SECTIONS} />
    </ProjectRoot>
  )
}
