import { theme, ColorTokens } from 'stitches.config'

export const strControl = (defaultValue?: string) => ({
  defaultValue,
  table: {
    type: { summary: 'string' },
    defaultValue: { summary: defaultValue },
  },
  control: {
    type: 'text',
  },
})

export const numberControl = (defaultValue?: number) => ({
  defaultValue,
  table: {
    type: { summary: 'number' },
    defaultValue: { summary: defaultValue },
  },
  control: {
    type: 'text',
  },
})

export const enumControl = <T>(items: T[], defaultValue?: T) => ({
  defaultValue,
  table: {
    type: { summary: items.join(' | ') },
    defaultValue: { summary: defaultValue },
  },
  control: {
    type: 'inline-radio',
    options: items,
  },
})

export const booleanControl = (defaultValue?: boolean) => ({
  defaultValue,
  table: {
    type: { summary: 'true | false' },
    defaultValue: { summary: defaultValue },
  },
  control: {
    type: 'boolean',
  },
})

export const selectControl = <T>(items: T[], defaultValue?: T) => ({
  defaultValue,
  options: items,
  control: { type: 'select' },
})

export const childrenControl = (defaultValue?: string) => ({
  defaultValue,
  table: {
    type: { summary: 'ReactNode' },
    defaultValue: { summary: defaultValue },
  },
  control: {
    type: 'text',
  },
})

export const themeColorsControl = (defaultValue?: ColorTokens) => ({
  defaultValue,
  options: Object.keys(theme.colors),
  control: { type: 'select' },
})

export const dateControl = (defaultValue?: string) => ({
  defaultValue,
  table: {
    type: { summary: 'date' },
    defaultValue: { summary: defaultValue },
  },
  control: {
    type: 'date',
  },
})
