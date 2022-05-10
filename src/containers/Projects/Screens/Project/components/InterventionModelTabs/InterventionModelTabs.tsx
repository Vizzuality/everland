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
  imageUrl?: string
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
      {tabs.map(({ title, description, imageUrl }) => (
        <TabContainer key={title} value={title}>
          <Text size="body1">{description}</Text>
          {imageUrl && (
            <TabImage>
              <Image src={imageUrl} alt="community" layout="fill" />
            </TabImage>
          )}
        </TabContainer>
      ))}
    </InterventionModelTabsRoot>
  )
}
