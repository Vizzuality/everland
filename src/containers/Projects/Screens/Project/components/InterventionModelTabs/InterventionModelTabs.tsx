import { Text } from 'components/Text'
import Image from 'next/image'

import {
  InterventionModelTabsRoot,
  TabContainer,
  TabImage,
  TabsList,
  TabTrigger,
} from './InterventionModelTabs.styles'

type Tab = {
  title: string
  description: string
  imageName?: string
}

export type InterventionModelTabsProps = {
  tabs: Tab[]
}

export const InterventionModelTabs = ({ tabs }: InterventionModelTabsProps) => {
  return (
    <InterventionModelTabsRoot defaultValue={tabs[0].title} orientation="vertical">
      <TabsList aria-label="Intervention model tabs">
        {tabs.map(({ title }) => (
          <TabTrigger key={title} value={title}>
            {title}
          </TabTrigger>
        ))}
      </TabsList>
      {tabs.map(({ title, description, imageName }) => (
        <TabContainer key={title} value={title}>
          <Text size="body1" weight="thin">
            {description}
          </Text>
          {imageName && (
            <TabImage>
              <Image src={`/images/projects/${imageName}.png`} alt="community" layout="fill" />
            </TabImage>
          )}
        </TabContainer>
      ))}
    </InterventionModelTabsRoot>
  )
}
