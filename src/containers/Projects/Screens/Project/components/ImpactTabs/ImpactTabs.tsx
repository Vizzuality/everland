import { Icon } from 'components/Icon'
import { Spacer } from 'components/Spacer'
import { Text } from 'components/Text'
import { useFetchImpactTree } from 'hooks/fetchImpactTree'
import { Impact } from 'hooks/fetchProjectDetail'
import { groupBy } from 'lodash'
import Image from 'next/image'
import { useState } from 'react'
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
  TabsList,
  TabTrigger,
  DropdownItem,
} from './ImpactTabs.styles'

type TabSection = {
  title: string
  subtitle: string
  description: string
  photoUrl?: string
}

export type ImpactTabsProps = {
  impact: Impact[]
}

export const ImpactTabs = ({ impact }: ImpactTabsProps) => {
  const { data: impactTree } = useFetchImpactTree()

  const groupedTabs = groupBy(impact, 'pillar')

  const tabs = impactTree?.data.map((pillar) => {
    return {
      title: pillar.title,
      sections: pillar.children.map((theme) => {
        const themeData = groupedTabs[pillar.title]?.find((data) => data.theme === theme.title)

        return {
          title: theme.title,
          subtitle: themeData?.title,
          description: themeData?.description,
          photoUrl: themeData?.photoUrl,
        }
      }),
    }
  })

  const firstTabSection = tabs?.[0].sections[0]

  const [activeTab, setActiveTab] = useState(firstTabSection?.title)
  const [openMenu, setOpenMenu] = useState<string>()

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
              <div
                onMouseOver={() => setOpenMenu(title)}
                onMouseLeave={() => setOpenMenu(undefined)}
              >
                <DropdownTrigger isActive={isActive}>{title}</DropdownTrigger>

                <Spacer space={1} direction="column" />

                {sections.length > 0 && (
                  <DropdownContent align="start" sideOffset={4}>
                    {sections.map((section) => (
                      <DropdownItem key={section.title}>
                        <TabTrigger key={title} value={section.title}>
                          {section.title}
                        </TabTrigger>
                      </DropdownItem>
                    ))}
                  </DropdownContent>
                )}
              </div>
            </Dropdown>
          )
        })}
      </TabsList>

      {tabsSections?.map(({ title: sectionTitle, subtitle, description, photoUrl }) => (
        <TabContainer key={sectionTitle} value={sectionTitle}>
          <Text size="h2" family="secondary" color="primary-tuna-500">
            {subtitle}
          </Text>

          <TabContent>
            <TabContentText>
              <Text size="body1">{description}</Text>
            </TabContentText>

            {photoUrl && (
              <TabImage>
                <Image src={photoUrl} alt="community" layout="fill" />
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
