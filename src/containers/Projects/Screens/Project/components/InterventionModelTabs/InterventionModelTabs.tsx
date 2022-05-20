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
  image?: {
    alt: string
    src: string
  }
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
      {tabs.map(({ title, description, image }, index) => (
        <TabContainer key={title} value={title} isShort={index < 2}>
          <Text size="body1">{description}</Text>
          {image && (
            <TabImage>
              <Image src={image.src} alt={image.alt} layout="fill" />
            </TabImage>
          )}
        </TabContainer>
      ))}
    </InterventionModelTabsRoot>
  )
}
