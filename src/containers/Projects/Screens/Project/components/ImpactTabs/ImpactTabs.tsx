import { Icon } from 'components/Icon'
import { Text } from 'components/Text'
import Image from 'next/image'
import { useState } from 'react'
import {
  ImpactTabsRoot,
  TabArrow,
  TabContainer,
  TabContent,
  TabContentText,
  TabImage,
  TabsList,
  TabTrigger,
} from './ImpactTabs.styles'

type Tab = {
  title: string
  subtitle: string
  description: string
  imageName?: string
}

export type ImpactTabsProps = {
  tabs: Tab[]
}

export const ImpactTabs = ({ tabs }: ImpactTabsProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0].title)

  const activeTabIndex = tabs.findIndex(({ title }) => title === activeTab)
  const lastTabIndex = tabs.length - 1

  const handleArrowLeftClicked = () => {
    activeTabIndex > 0
      ? setActiveTab(tabs[activeTabIndex - 1].title)
      : setActiveTab(tabs[lastTabIndex].title)
  }

  const handleArrowRightClicked = () => {
    activeTabIndex < lastTabIndex
      ? setActiveTab(tabs[activeTabIndex + 1].title)
      : setActiveTab(tabs[0].title)
  }

  return (
    <ImpactTabsRoot
      defaultValue={tabs[0].title}
      orientation="vertical"
      value={activeTab}
      onValueChange={setActiveTab}
    >
      <TabsList aria-label="impact tabs">
        {tabs.map(({ title }) => (
          <TabTrigger key={title} value={title}>
            {title}
          </TabTrigger>
        ))}
      </TabsList>
      {tabs.map(({ title, subtitle, description, imageName }) => (
        <TabContainer key={title} value={title}>
          <Text size="h2" family="secondary" color="primary-tuna-500">
            {subtitle}
          </Text>

          <TabContent>
            <TabContentText>
              <Text size="body1" weight="thin">
                {description}
              </Text>
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
