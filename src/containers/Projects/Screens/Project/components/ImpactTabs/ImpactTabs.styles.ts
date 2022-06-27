import * as HoverCard from '@radix-ui/react-hover-card'
import * as Tabs from '@radix-ui/react-tabs'
import { styled } from 'stitches.config'
import { Text } from 'components/Text'

export const ImpactTabsRoot = styled(Tabs.Root)

export const TabsList = styled(Tabs.List, {
  display: 'flex',
  marginLeft: '-$12',

  flexDirection: 'column',
  alignItems: 'flex-start',

  '@bp2': {
    flexDirection: 'row',
    alignItems: 'center',
  },
})

export const TabTrigger = styled(Tabs.Trigger, {
  // Reset
  appearance: 'none',
  backgroundColor: 'transparent',
  border: 'none',
  textAlign: 'inherit',
  outline: 'none',

  transition: 'background-color 0.2s ease-out, color 0.2s ease-out',

  minHeight: '$6',
  cursor: 'pointer',
  width: '100%',

  fontFamily: '$primary',
  fontSize: '$caption1',
  lineHeight: '$caption1',
  fontWeight: '$thin',
  color: '$primary-tuna-500',
  padding: '$1',

  '&:hover, &[data-state="active"]': {
    color: '$primary-jasper-700',
    backgroundColor: '$primary-jasper-200',
    fontWeight: '$regular',
    outline: 'none',
    border: 'none',
  },

  '&:disabled': {
    color: '$primary-tuna-300',
    cursor: 'not-allowed',

    '&:hover': {
      color: '$primary-tuna-300',
      backgroundColor: 'transparent',
      fontWeight: '$thin',
    },
  },
})

export const TabContainer = styled(Tabs.Content, {
  paddingTop: '$12',
})

export const TabContent = styled('div', {
  marginTop: '$14',
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: '1fr 1fr',
  height: '100%',

  '@bp2': {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr',
    justifyContent: 'space-between',
    gap: '$8',
    alignItems: 'center',
  },
})

export const TabImage = styled('figure', {
  position: 'relative',
  height: '100%',
  width: '100%',
  margin: 'auto',

  '@bp2': {
    margin: 0,
    marginRight: '$9',
    minHeight: '450px',
  },
})

export const HoverCardContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
})

export const HoverCardTrigger = styled(HoverCard.Trigger, {
  // Reset
  appearance: 'none',
  backgroundColor: 'transparent',
  border: 'none',
  textAlign: 'inherit',
  outline: 'none',

  display: 'flex',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'space-between',

  transition: 'color 0.2s ease-out',

  marginLeft: '$12',
  cursor: 'pointer',
  minWidth: '175px',
  borderBottom: '1px solid $primary-jasper-500',

  fontFamily: '$secondary',
  fontSize: '$subtitle2',
  lineHeight: '$subtitle',
  color: '$primary-tuna-500',

  mb: '$4',

  '@bp2': {
    mb: '0px',

    '&:hover': {
      color: '$primary-jasper-500',
    },
  },

  '&[data-state="open"]': {
    color: '$primary-jasper-500',
  },

  variants: {
    isActive: {
      true: {
        color: '$primary-jasper-500',
        fontWeight: '$bold',
      },
    },
  },
})

export const HoverCardContent = styled(HoverCard.Content, {
  paddding: '$6 $4',
  backgroundColor: '$primary-jasper-100',
  padding: '$2',
  maxWidth: '175px',
})

export const TabContentText = styled(Text, {
  '@mobile': {
    display: 'block',
    marginBottom: '$8',
  },

  '@bp2': {
    marginBottom: 0,
    maxWidth: '403px',
  },
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
  cursor: 'pointer',

  bottom: '$25',
  transform: 'translateY(50%)',

  '&:hover use': {
    stroke: '$primary-tuna-default',
    strokeWidth: '1px',
  },

  '@bp2': { bottom: '50%' },

  variants: {
    position: {
      left: {
        left: '$14',
        '@bp2': { left: '-$12' },
      },
      right: {
        right: '$14',
        '@bp2': { right: '-$12' },
      },
    },
  },
})

export const TabTitleText = styled(Text, {
  '@mobile': {
    fontSize: '$h1Mobile',
  },

  '@bp2': {
    fontSize: '$h3',
  },
})

export const TabSectionImage = styled('img', {
  height: '100%',
  objectFit: 'contain',
  width: '100%',
})
