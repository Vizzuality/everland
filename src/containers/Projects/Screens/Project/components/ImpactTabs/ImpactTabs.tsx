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

const TABS = ['Community', 'Governance', 'Biodiversity', 'Climate']

export const ImpactTabs = () => {
  const [activeTab, setActiveTab] = useState(TABS[0])

  const activeTabIndex = TABS.indexOf(activeTab)
  const lastTabIndex = TABS.length - 1

  const handleArrowLeftClicked = () => {
    activeTabIndex > 0 ? setActiveTab(TABS[activeTabIndex - 1]) : setActiveTab(TABS[lastTabIndex])
  }

  const handleArrowRightClicked = () => {
    activeTabIndex < lastTabIndex ? setActiveTab(TABS[activeTabIndex + 1]) : setActiveTab(TABS[0])
  }

  return (
    <ImpactTabsRoot
      defaultValue={TABS[0]}
      orientation="vertical"
      value={activeTab}
      onValueChange={setActiveTab}
    >
      <TabsList aria-label="impact tabs">
        {TABS.map((tab) => (
          <TabTrigger key={tab} value={tab}>
            {tab}
          </TabTrigger>
        ))}
      </TabsList>
      <TabContainer value={TABS[0]}>
        <Text size="h2" family="secondary" color="primary-tuna-500">
          More than 12,000 students served in project supported schools
        </Text>

        <TabContent>
          <TabContentText>
            <Text size="body1" weight="thin">
              In total, 1,501 women participated in project activities, and benefited from
              improvements to access to education and health care. (Project activities will be
              designed in a way that encourages the participation of women; moreover, all management
              and leadership committees will contain at least one woman, with an aim of
              transitioning to equal representation over time.
            </Text>
          </TabContentText>
          <TabImage>
            <Image src="/images/projects/impact-community.jpg" alt="community" layout="fill" />
          </TabImage>
        </TabContent>
      </TabContainer>
      <TabContainer value={TABS[1]}>
        <Text size="h2" family="secondary" color="primary-tuna-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Text>

        <TabContent>
          <TabContentText>
            <Text size="body1" weight="thin">
              usce iaculis ante id velit fringilla, sed sagittis orci ullamcorper. Mauris pretium,
              velit vitae imperdiet sodales, magna nibh tristique neque, a malesuada orci diam et
              ante. Vestibulum ornare tristique felis, ut suscipit ex fringilla non. Nullam a
              tincidunt mauris.usce iaculis ante id velit fringilla, sed sagittis orci ullamcorper.
              Mauris pretium, velit vitae imperdiet sodales, magna nibh tristique neque, a malesuada
              orci diam et ante. Vestibulum ornare tristique felis, ut suscipit ex fringilla non.
              Nullam a tincidunt mauris.
            </Text>
          </TabContentText>

          <TabImage>
            <Image src="/images/projects/impact-governance.jpg" alt="community" layout="fill" />
          </TabImage>
        </TabContent>
      </TabContainer>
      <TabContainer value={TABS[2]}>
        <Text size="h2" family="secondary" color="primary-tuna-500">
          20,000 People experiencing improved livelihoods
        </Text>

        <TabContent>
          <TabContentText>
            <Text size="body1" weight="thin">
              5,827 community members engaged in productive activities or employment in micro-,
              small- and medium-sized enterprises, and gaining improved livelihoods or income as a
              result, as a result of project activities (I aquí si quieres podemos inventar una
              historieta de una enterprise de ecocharcoal).
            </Text>
          </TabContentText>
        </TabContent>
      </TabContainer>
      <TabContainer value={TABS[3]}>
        <Text size="h2" family="secondary" color="primary-tuna-500">
          From 2010 to 2020, Keo Seima lost 224kha of humid primary forest.
        </Text>

        <TabContent>
          <TabContentText>
            <Text size="body1" weight="thin">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel vero nemo repudiandae
              quo modi exercitationem iure saepe nam adipisci dolores, fugit, magnam iste a,
              consequatur nobis iusto doloribus libero mollitia!
            </Text>
          </TabContentText>
        </TabContent>
      </TabContainer>

      <TabArrow position="left" onClick={handleArrowLeftClicked}>
        <Icon name="arrow-down-line" />
      </TabArrow>
      <TabArrow position="right" onClick={handleArrowRightClicked}>
        <Icon name="arrow-down-line" />
      </TabArrow>
    </ImpactTabsRoot>
  )
}
