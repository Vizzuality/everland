import { styled } from 'stitches.config'

import * as Tabs from '@radix-ui/react-tabs'

export const InterventionModelTabsRoot = styled(Tabs.Root, {
  position: 'relative',
  display: 'flex',
  gap: '$1',
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
  width: '100px',

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
    width: '299px',

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
  maxWidth: '220px',

  '& li': {
    marginTop: '$4',
    listStyle: 'disc',
  },

  '@bp1': {
    maxWidth: 'initial',
  },

  '@bp2': {
    maxWidth: '433px',
  },
})

export const TabImage = styled('figure', {
  position: 'relative',
  right: '155px',
  margin: 'auto',
  width: '334px',
  height: '375px',
  zIndex: -1,

  '@bp2': {
    position: 'absolute',
    top: '$10',
    right: '-120px',
  },
})
