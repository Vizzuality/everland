import { Icon } from 'components/Icon'
import { Spacer } from 'components/Spacer'
import { Text } from 'components/Text'
import { useFetchImpactTree } from 'hooks/fetchImpactTree'
import { groupBy } from 'lodash'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Impact, Photo } from 'types/Project'
import {
  ImpactTabsRoot,
  Dropdown,
  DropdownContent,
  DropdownTrigger,
  TabArrow,
  TabContainer,
  TabContent,
  TabContentText,
  TabImage,
  TabTitleText,
  TabsList,
  TabTrigger,
  DropdownItem,
  DropdownContainer,
} from './ImpactTabs.styles'

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
  const dropdownRef = useRef<HTMLButtonElement>(null)

  const groupedTabs = groupBy(impact, 'pillar')

  const tabs = impactTree?.data
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

  const firstTabSection = tabs?.[0].sections[0]

  const [activeTab, setActiveTab] = useState(firstTabSection?.title)
  const [openMenu, setOpenMenu] = useState<string>()
  const [optionsWidth, setOptionsWidth] = useState<number>(undefined)

  useEffect(() => {
    if (!dropdownRef.current) return

    const observer = new ResizeObserver((entries) => {
      setOptionsWidth(entries[0].contentRect.width)
    })

    observer.observe(dropdownRef.current)

    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dropdownRef.current])

  const tabsSections = tabs?.reduce((acc: TabSection[], { sections }) => {
    return [...acc, ...sections.map((section) => section)]
  }, [])

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
    setTimeout(() => setOpenMenu(undefined), 100) // NOTE: delay for UX
  }

  return (
    <ImpactTabsRoot defaultValue={impact[0].theme} value={activeTab} onValueChange={onValueChange}>
      <TabsList aria-label="impact tabs">
        {tabs?.map(({ title, sections }) => {
          const isActive = sections.some(({ title }) => title === activeTab)

          return (
            <Dropdown open={openMenu === title} key={title} modal={false}>
              <DropdownContainer
                onMouseOver={() => setOpenMenu(title)}
                onMouseLeave={() => setOpenMenu(undefined)}
              >
                <DropdownTrigger ref={dropdownRef} isActive={isActive}>
                  <span>{title}</span>
                  <Icon name="chevron-down" />
                </DropdownTrigger>

                <Spacer space={2} direction="column" />

                {sections.length > 0 && (
                  <DropdownContent
                    align="start"
                    sideOffset={4}
                    css={{ width: optionsWidth, maxWidth: optionsWidth }}
                  >
                    {sections.map((section) => {
                      return (
                        <DropdownItem key={section.title} onClick={() => setOpenMenu(undefined)}>
                          <TabTrigger
                            key={title}
                            value={section.title}
                            disabled={!section.description && !section.photo && !section.subtitle}
                          >
                            {section.title}
                          </TabTrigger>
                        </DropdownItem>
                      )
                    })}
                  </DropdownContent>
                )}
              </DropdownContainer>
              <Spacer space="2" direction="row" />
            </Dropdown>
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
