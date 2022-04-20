import { styled } from 'stitches.config'

import * as Tabs from '@radix-ui/react-tabs'
import { Text } from 'components/Text'

export const ImpactTabsRoot = styled(Tabs.Root)

export const TabsList = styled(Tabs.List, {
  display: 'flex',
  marginLeft: '-$12',
})

export const TabTrigger = styled(Tabs.Trigger, {
  // Reset
  appearance: 'none',
  backgroundColor: 'transparent',
  border: 'none',
  textAlign: 'inherit',

  transition: 'color 0.2s ease-out',

  marginLeft: '$12',
  cursor: 'pointer',
  minWidth: '175px',
  borderBottom: '1px solid $primary-jasper-500',

  fontFamily: '$secondary',
  fontSize: '$subtitle2',
  lineHeight: '$subtitle',
  color: '$primary-tuna-500',

  '&:hover, &[data-state="active"]': {
    color: '$primary-jasper-500',
  },
})

export const TabContainer = styled(Tabs.Content, {
  paddingTop: '$12',
})

export const TabContent = styled('div', {
  marginTop: '$14',
  display: 'flex',
  justifyContent: 'space-between',
})

export const TabImage = styled('figure', {
  position: 'relative',
  height: '380px',
  width: '273px',
})

export const TabContentText = styled(Text, {
  marginTop: '$11',
  fontSize: '$body1',
  lineHeight: '$body1',
  maxWidth: '403px',
  fontWeight: '$thin',
})

export const TabArrow = styled('button', {
  // Reset
  appearance: 'none',
  border: 'none',
  textAlign: 'inherit',

  position: 'absolute',
  width: '$24',
  height: '$24',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$neutral-light-beige',
  boxShadow: '$1',
  borderRadius: '$pill',

  top: '50%',
  transform: 'translateY(-50%)',

  variants: {
    position: {
      left: {
        left: '-$12',
      },
      right: {
        right: '-$12',
      },
    },
  },
})
