import { styled } from 'stitches.config'

import * as Tabs from '@radix-ui/react-tabs'

export const InterventionModelTabsRoot = styled(Tabs.Root, {
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  minHeight: '622px',
})

export const TabsList = styled(Tabs.List, {
  display: 'flex',
  flexDirection: 'column',
})

export const TabTrigger = styled(Tabs.Trigger, {
  // Reset
  appearance: 'none',
  backgroundColor: 'transparent',
  border: 'none',
  textAlign: 'inherit',

  transition: 'color 0.2s ease-out',
  cursor: 'pointer',
  fontFamily: '$secondary',
  fontSize: '$h2',
  lineHeight: 'h2',
  color: '$primary-tuna-500',
  minWidth: '212px',

  '&:after': {
    transition: 'opacity .2s ease-out, width .2s ease-out',
    transformOrigin: 'left',
    opacity: 0.2,
    width: 0,

    content: '',
    position: 'relative',
    top: '-$1',
    display: 'block',
    height: '$5',
    backgroundImage: 'url(/images/projects/tab-underline.png)',
    backgroundSize: '212px 100%',
  },

  '&:hover, &[data-state="active"]': {
    color: '$primary-jasper-500',
  },

  '&[data-state="active"]:after': {
    opacity: 1,
    width: '212px',
  },
})

export const TabContainer = styled(Tabs.Content, {
  maxWidth: '433px',
})

export const TabImage = styled('figure', {
  position: 'absolute',
  top: '370px',
  left: 0,
  height: '253px',
  width: '320px',
})
