import { Text } from 'components/Text'

import {
  InterventionModelTabsRoot,
  InterventionModelImage,
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
      {tabs.map(({ title, description, image }) => (
        <TabContainer key={title} value={title}>
          <Text size="body1" dangerouslySetInnerHTML={{ __html: description }} />
          {image && (
            <TabImage>
              <InterventionModelImage src={image.src} alt={image.alt} />
            </TabImage>
          )}
        </TabContainer>
      ))}
    </InterventionModelTabsRoot>
  )
}
