import { Container } from 'containers/components/Container/Container'
import { Section } from 'components/Section/Section'
import { Overlay } from 'components/Overlay/Overlay.styles'
import { Text } from 'components/Text'
import { Icon } from 'components/Icon'
import { Spacer } from 'components/Spacer'
import { ImagesGallery } from './components/ImagesGallery'
import { InterventionModelTabs } from './components/InterventionModelTabs'
import { ImpactTabs } from './components/ImpactTabs'
import { RelatedProjectsCards } from './components/RelatedProjectsCards'
import { Navbar } from './components/Navbar'
import * as playIcon from '../../../../../public/images/projects/play.svg'
import { NAV_SECTIONS, SECTION_NAME } from './constants'

import {
  Hero,
  HeroTitle,
  IframeContainer,
  Impact,
  InterventionModel,
  ScrollableText,
  ScrollDown,
  SpaceBetween,
  RelatedProjects,
  Subtitle,
  Video,
  ProjectRoot,
  HeroContent,
  VideoPlayIcon,
  VideoOverlay,
  VideoContainer,
} from './Project.styles'

import { Header } from 'components/Header'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useFetchProjectDetail } from 'hooks/fetchProjectDetail'
import { useRouter } from 'next/router'
import { ScrollToTop } from 'components/ScrollToTop/ScrollToTop'

export const Project = () => {
  const [activeSection, setActiveSection] = useState<SECTION_NAME>()
  const [isVideoTouched, setIsVideoTouched] = useState(false)
  const router = useRouter()

  const { projectId } = router.query as { projectId: string }

  const { data: project, status } = useFetchProjectDetail(projectId)

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _eventListener = (e) => {
      const visiblePercentages = NAV_SECTIONS.map(({ name }) => {
        const visiblePercentage = calculateVisiblePercentage(`#${name}`)

        return visiblePercentage ?? 0
      })

      const areAllZero = visiblePercentages.every((percentage) => percentage === 0)

      if (areAllZero) {
        setActiveSection(undefined)
        return
      }

      const max = Math.max(...visiblePercentages)

      const index = visiblePercentages.indexOf(max)

      if (index === -1) return
      setActiveSection(NAV_SECTIONS[index].name)
    }

    document.addEventListener('scroll', _eventListener)

    return () => document.removeEventListener('scroll', _eventListener)
  }, [])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handlePlayOrPauseVideo = (e: any) => {
    if (!isVideoTouched) {
      e.target.play()
      setTimeout(() => {
        e.target.controls = true
        setIsVideoTouched(true)
      }, 100)
    }
  }

  const calculateVisiblePercentage = (querySelector: string) => {
    const rect = document.querySelector(querySelector)?.getBoundingClientRect()

    if (!rect) return

    const top = Math.min(0, rect.top)

    const bottom =
      (rect.bottom > window.innerHeight
        ? window.innerHeight - rect.bottom
        : Math.min(0, rect.bottom)) - 96

    const visibleHeight = rect.height + top + bottom

    const visiblePercentage = Math.max((visibleHeight / rect.height) * 100, 0)

    return visiblePercentage
  }

  if (status === 'loading') return null

  return (
    <ProjectRoot>
      <Section scrollToTop={false}>
        <Hero css={{ $$mainPicture: `url(${project.mainPicture})` }}>
          <Overlay />
          <Header />
          <HeroContent>
            <HeroTitle>
              <Text as="h1" size="heroTitle4" weight="bold" color="neutral-white" align="center">
                {project.title}
              </Text>
            </HeroTitle>

            <Subtitle>
              <Text size="h2" color="neutral-white" family="secondary" fontStyle="italic">
                {project.subtitle}
              </Text>
            </Subtitle>

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

      <Section scrollDistance="3" id={NAV_SECTIONS[0].name}>
        <Container>
          <SpaceBetween>
            <IframeContainer>
              <iframe frameBorder="0" src={project.embeddedMap} />
            </IframeContainer>

            <Spacer space="8" direction="row" />

            <ScrollableText>
              <Text size="body1" dangerouslySetInnerHTML={{ __html: project.projectInfo }} />
            </ScrollableText>
          </SpaceBetween>
        </Container>
      </Section>

      {project.gallery && (
        <Section scrollDistance="10" id={NAV_SECTIONS[1].name}>
          <ImagesGallery gallery={project.gallery} />
        </Section>
      )}

      {project.interventionModel && (
        <Section id={NAV_SECTIONS[2].name}>
          <Container>
            <InterventionModel>
              <Text
                size={{ '@mobile': 'subtitle1', '@bp2': 'h3' }}
                weight="bold"
                color="primary-tuna-500"
              >
                {project.interventionModel.title}
              </Text>

              <Spacer direction="column" space="10" />
              <InterventionModelTabs tabs={project.interventionModel.sections} />
            </InterventionModel>
          </Container>
        </Section>
      )}

      {project.impact && (
        <Section id={NAV_SECTIONS[3].name}>
          <Container
            css={{
              '@mobile': { paddingLeft: 0, paddingRight: 0 },
              '@bp2': { paddingLeft: '$16', paddingRight: '$16' },
            }}
          >
            <Impact>
              <Text
                size={{ '@mobile': 'subtitle1', '@bp2': 'h3' }}
                weight="bold"
                color="primary-tuna-500"
              >
                Impact
              </Text>

              <Spacer direction="column" space="10" />
              <ImpactTabs impact={project.impact} />
            </Impact>
          </Container>
        </Section>
      )}

      {project.video && (
        <Section scrollDistance="7">
          <Container>
            <VideoContainer>
              <Video
                poster={project.video.thumbnail.src}
                controls={isVideoTouched}
                onClick={handlePlayOrPauseVideo}
              >
                <source src={project.video.url} type="video/mp4" />
              </Video>
              {!isVideoTouched && (
                <>
                  <VideoOverlay />
                  <VideoPlayIcon>
                    <Image src={playIcon} alt="play" />
                  </VideoPlayIcon>
                </>
              )}
            </VideoContainer>
          </Container>
        </Section>
      )}

      {project.relatedProjects && (
        <Section scrollToTop={false}>
          <RelatedProjects>
            <Container>
              <Text size="body1" weight="bold" color="neutral-light-beige">
                Discover other projects:
              </Text>
            </Container>
            <Spacer direction="column" space="10" />

            <RelatedProjectsCards relatedProjects={project.relatedProjects} />

            <ScrollToTop scrollDistance="7" isWhite />
            <Spacer direction="column" space="5" />
          </RelatedProjects>
        </Section>
      )}

      <Navbar sections={NAV_SECTIONS} project={project} activeSection={activeSection} />
    </ProjectRoot>
  )
}
