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

import { Header } from 'components/Header'
import { MouseEvent, MouseEventHandler } from 'react'
import { useFetchProjectDetail } from 'hooks/fetchProjectDetail'

const { relatedProjects, video } = data

export const Project = () => {
  const { data: project, status } = useFetchProjectDetail()

  const handlePlayOrPauseVideo = (
    e: MouseEvent<HTMLVideoElement> & { target: HTMLVideoElement },
  ) => {
    e.target.paused && !e.target.controls && e.target.play()
    e.target.controls = true
  }

  if (status === 'loading') return null

  return (
    <ProjectRoot>
      <Section>
        <Hero>
          <Overlay />
          <Header />
          <HeroContent>
            <Text as="h1" size="heroTitle4" weight="bold" color="neutral-white" align="center">
              {project.title}
            </Text>
            <Text size="h2" color="neutral-white" family="secondary" fontStyle="italic">
              {project.location.name}
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
              <iframe frameBorder="0" src={project.embeddedMap} />
            </IframeContainer>
            <ScrollableText>
              <Text size="body1" dangerouslySetInnerHTML={{ __html: project.projectInfo }} />
            </ScrollableText>
          </SpaceBetween>
        </Container>
      </Section>

      <Section id={NAV_SECTIONS[0].name}>
        <ImagesGallery gallery={project.gallery} />
      </Section>

      <Section id={NAV_SECTIONS[1].name}>
        <Container>
          <InterventionModel>
            <Text size="h3" weight="bold" color="primary-tuna-500">
              {project.interventionModel.title}
            </Text>

            <Spacer direction="column" space="10" />
            <InterventionModelTabs tabs={project.interventionModel.sections} />
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
            onClick={handlePlayOrPauseVideo}
          >
            <source src={project.video} type="video/mp4" />
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

          <RelatedProjectsCards relatedProjects={project.relatedProjects} />
        </RelatedProjects>
      </Section>

      <Navbar sections={NAV_SECTIONS} project={project} />
    </ProjectRoot>
  )
}
