import { Icon } from 'components/Icon'
import { Spacer } from 'components/Spacer'
import { Text } from 'components/Text'
import { useFetchImpactTree } from 'hooks/fetchImpactTree'
import { groupBy } from 'lodash'
import Image from 'next/image'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Impact, Photo } from 'types/Project'
import {
  ImpactTabsRoot,
  HoverCardTrigger,
  TabArrow,
  TabContainer,
  TabContent,
  TabContentText,
  TabImage,
  TabTitleText,
  TabsList,
  TabTrigger,
  HoverCardContainer,
  HoverCardContent,
} from './ImpactTabs.styles'

import * as HoverCard from '@radix-ui/react-hover-card'

type TabSection = {
  title: string
  subtitle: string
  description: string
  photo?: Photo
}

export type ImpactTabsProps = {
  impact: Impact[]
}

export const ImpactTabs = ({ impact }: ImpactTabsProps) => {
  const { data: impactTree } = useFetchImpactTree()
  const dropdownRef = useRef<HTMLAnchorElement>(null)

  const groupedTabs = useMemo(() => groupBy(impact, 'pillar'), [impact])

  const tabs = useMemo(() => {
    return impactTree?.data
      .map((pillar) => {
        const sections = pillar.children
          .map((theme) => {
            const themeData = groupedTabs[pillar.title]?.find((data) => data.theme === theme.title)
            if (!themeData) return

            return {
              title: theme.title,
              subtitle: themeData?.title,
              description: themeData?.description,
              photo: themeData?.photo,
            }
          })
          .filter((data) => data)

        if (sections.length === 0) return

        return {
          title: pillar.title,
          sections,
        }
      })
      .filter((data) => data)
  }, [impactTree, groupedTabs])

  const firstTabSection = tabs?.[0].sections[0]

  const [activeTab, setActiveTab] = useState(firstTabSection?.title)
  const [openMenu, setOpenMenu] = useState<string>()
  const [optionsWidth, setOptionsWidth] = useState<number>(undefined)
  const [windowWidth, setWindowWidth] = useState<number>(undefined)

  useEffect(() => {
    if (!dropdownRef.current) return

    const observer = new ResizeObserver((entries) => {
      setOptionsWidth(entries[0].contentRect.width)
    })

    observer.observe(dropdownRef.current)

    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dropdownRef.current])

  useEffect(() => {
    if (typeof window === 'undefined') return

    setWindowWidth(window.screen.width)

    const _onResize = () => {
      setWindowWidth(window.screen.width)
    }

    window.addEventListener('resize', _onResize)

    return () => window.removeEventListener('resize', _onResize)
  }, [window])

  const tabsSections = useMemo(() => {
    return tabs?.reduce((acc: TabSection[], { sections }) => {
      return [...acc, ...sections.map((section) => section)]
    }, [])
  }, [tabs])

  const activeTabIndex = tabsSections?.findIndex(({ title }) => title === activeTab)
  const lastTabIndex = tabsSections?.length - 1

  const handleArrowLeftClicked = () => {
    activeTabIndex > 0
      ? setActiveTab(tabsSections[activeTabIndex - 1].title)
      : setActiveTab(tabsSections[lastTabIndex].title)
  }

  const handleArrowRightClicked = () => {
    activeTabIndex < lastTabIndex
      ? setActiveTab(tabsSections[activeTabIndex + 1].title)
      : setActiveTab(tabsSections[0].title)
  }

  const onValueChange = (value: string) => {
    setActiveTab(value)
  }

  return (
    <ImpactTabsRoot defaultValue={impact[0].theme} value={activeTab} onValueChange={onValueChange}>
      <TabsList aria-label="impact tabs">
        {tabs?.map(({ title, sections }) => {
          const isActive = sections.some(({ title }) => title === activeTab)

          return (
            <HoverCard.Root open={openMenu === title} key={title} openDelay={0}>
              <HoverCardContainer
                onMouseOver={() => setOpenMenu(title)}
                onTouchStart={() => setOpenMenu(openMenu === title ? undefined : title)}
              >
                <HoverCardTrigger ref={dropdownRef} isActive={isActive}>
                  <span>{title}</span>
                  <Icon name={openMenu === title ? 'chevron-up' : 'chevron-down'} />
                </HoverCardTrigger>

                <Spacer space={2} direction="column" />

                {sections.length > 0 && (
                  <HoverCardContent
                    onFocusOutside={() => openMenu === title && setOpenMenu(undefined)}
                    align="start"
                    sideOffset={4}
                    css={{ width: optionsWidth, maxWidth: optionsWidth }}
                    onMouseLeave={() => openMenu === title && setOpenMenu(undefined)}
                    // NOTE: only portalled in desktop
                    portalled={!windowWidth || windowWidth > 900}
                  >
                    {sections.map((section) => {
                      return (
                        <TabTrigger
                          key={title}
                          value={section.title}
                          disabled={!section.description && !section.photo && !section.subtitle}
                        >
                          {section.title}
                        </TabTrigger>
                      )
                    })}
                  </HoverCardContent>
                )}
              </HoverCardContainer>
              <Spacer space="2" direction="row" />
            </HoverCard.Root>
          )
        })}
      </TabsList>

      {tabsSections?.map(({ title: sectionTitle, subtitle, description, photo }) => (
        <TabContainer key={sectionTitle} value={sectionTitle}>
          <TabTitleText>
            <Text
              family="secondary"
              color="primary-tuna-500"
              dangerouslySetInnerHTML={{ __html: subtitle }}
            />
          </TabTitleText>
          <TabContent>
            <TabContentText>
              <Text size="body1" dangerouslySetInnerHTML={{ __html: description }} />
            </TabContentText>
            {photo && (
              <TabImage>
                <Image src={photo.url} alt={photo.altText} layout="fill" objectFit="contain" />
              </TabImage>
            )}
          </TabContent>
        </TabContainer>
      ))}

      <TabArrow position="left" onClick={handleArrowLeftClicked}>
        <Icon name="arrow-left" size={16} color="primary-tuna-default" />
      </TabArrow>

      <TabArrow position="right" onClick={handleArrowRightClicked}>
        <Icon name="arrow-right" size={16} color="primary-tuna-default" />
      </TabArrow>
    </ImpactTabsRoot>
  )
}
