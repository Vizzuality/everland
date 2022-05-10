import { Icon } from 'components/Icon'
import { Spacer } from 'components/Spacer'
import { Text } from 'components/Text'
import { Impact } from 'hooks/fetchProjectDetail'
import { groupBy } from 'lodash'
import Image from 'next/image'
import { useState } from 'react'
import { data } from '../../constants'
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
  impact: Impact[]
}

export const ImpactTabs = ({ impact }: ImpactTabsProps) => {
  const groupedTabs = groupBy(impact, 'pillar')

  const tabs = Object.values(groupedTabs).map((impactItem) => {
    return {
      title: impactItem[0].pillar,
      sections: impactItem.map((section) => {
        return {
          title: section.theme,
          subtitle: section.data.subtitle,
          description: section.data.description,
          imageName: section.photoUrl,
        }
      }),
    }
  })

  const firstTabSection = tabs[0].sections[0]

  const [activeTab, setActiveTab] = useState(firstTabSection.title)
  const [openTab, setOpenTab] = useState<string>()

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

  const onValueChange = (value: string) => {
    setActiveTab(value)
    setTimeout(() => setOpenTab(undefined), 100) // NOTE: delay for UX
  }

  return (
    <ImpactTabsRoot defaultValue={tabs[0].title} value={activeTab} onValueChange={onValueChange}>
      <TabsList aria-label="impact tabs">
        {tabs.map(({ title, sections }) => {
          const isActive = sections.some(({ title }) => title === activeTab)
          return (
            <Dropdown open={openTab === title} key={title} modal={false}>
              <div onMouseOver={() => setOpenTab(title)} onMouseLeave={() => setOpenTab(undefined)}>
                <DropdownTrigger isActive={isActive}>{title}</DropdownTrigger>

                <Spacer space={1} direction="column" />

                <DropdownContent align="start" sideOffset={4}>
                  {sections.map(({ title: sectionTitle }) => (
                    <DropdownItem key={sectionTitle}>
                      <TabTrigger key={title} value={sectionTitle}>
                        {sectionTitle}
                      </TabTrigger>
                    </DropdownItem>
                  ))}
                </DropdownContent>
              </div>
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
