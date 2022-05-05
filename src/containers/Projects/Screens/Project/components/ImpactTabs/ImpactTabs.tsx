import { Icon } from 'components/Icon'
import { Text } from 'components/Text'
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
  imageName?: string
}

type Tab = {
  title: string
  sections: TabSection[]
}

export type ImpactTabsProps = {
  tabs: Tab[]
}

export const ImpactTabs = ({ tabs }: ImpactTabsProps) => {
  const firstTabSection = tabs[0].sections[0]

  const [activeTab, setActiveTab] = useState(firstTabSection.title)

  const tabsSections = tabs.reduce((acc: TabSection[], { sections }) => {
    return [...acc, ...sections.map((section) => section)]
  }, [])

  const activeTabIndex = tabsSections.findIndex(({ title }) => title === activeTab)
  const lastTabIndex = tabsSections.length - 1

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

  return (
    <ImpactTabsRoot
      defaultValue={tabs[0].title}
      value={activeTab}
      onValueChange={setActiveTab}
      onChange={console.log}
    >
      <TabsList aria-label="impact tabs">
        {tabs.map(({ title, sections }) => {
          const isActive = sections.some(({ title }) => title === activeTab)
          return (
            <Dropdown key={title}>
              <DropdownTrigger isActive={isActive}>{title}</DropdownTrigger>
              <DropdownContent align="start" sideOffset={4}>
                {sections.map(({ title: sectionTitle }) => (
                  <DropdownItem key={sectionTitle}>
                    <TabTrigger key={title} value={sectionTitle}>
                      {sectionTitle}
                    </TabTrigger>
                  </DropdownItem>
                ))}
              </DropdownContent>
            </Dropdown>
          )
        })}
      </TabsList>
      {tabsSections.map(({ title: sectionTitle, subtitle, description, imageName }) => (
        <TabContainer key={sectionTitle} value={sectionTitle}>
          <Text size="h2" family="secondary" color="primary-tuna-500">
            {subtitle}
          </Text>

          <TabContent>
            <TabContentText>
              <Text size="body1">{description}</Text>
            </TabContentText>
            {imageName && (
              <TabImage>
                <Image src={`/images/projects/${imageName}.jpg`} alt="community" layout="fill" />
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
