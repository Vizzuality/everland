import { styled } from 'stitches.config'

import * as Tabs from '@radix-ui/react-tabs'

export const InterventionModelTabsRoot = styled(Tabs.Root, {
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',

  '@bp2': {
    minHeight: '622px',
  },
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
  fontSize: '$subtitle1',
  lineHeight: '$subtitle1',
  color: '$primary-tuna-500',
  minWidth: '112px',

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
    backgroundImage: 'url(/images/projects/tab-underline.svg)',
    backgroundSize: '100px 100%',
  },

  '&:hover, &[data-state="active"]': {
    color: '$primary-jasper-500',
  },

  '&[data-state="active"]:after': {
    opacity: 1,
    width: '100px',
  },

  '@bp2': {
    fontSize: '$h2',
    lineHeight: '$h2',
    minWidth: '147px',
    marginBottom: '$2',

    '&[data-state="active"]:after': {
      opacity: 1,
      width: '147px',
    },

    '&:after': {
      backgroundSize: '147px 100%',
      top: '$1',
    },
  },
})

export const TabContainer = styled(Tabs.Content, {
  '@bp2': {
    maxWidth: '433px',
  },
})

export const TabImage = styled('figure', {
  position: 'absolute',
  top: '370px',
  left: 0,
  height: '253px',
  width: '320px',
  display: 'none',

  '@bp2': {
    display: 'block',
  },
})
