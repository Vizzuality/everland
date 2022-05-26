import MOCK_DATA from 'data/keo-seima-mock.json'

export enum SECTION_NAME {
  OVERVIEW = 'overview',
  MEDIA = 'media',
  INTERVENTION_MODEL = 'intervention-model',
  IMPACT = 'impact',
}

export const NAV_SECTIONS = [
  { name: SECTION_NAME.OVERVIEW, label: 'Overview' },
  { name: SECTION_NAME.MEDIA, label: 'Media' },
  { name: SECTION_NAME.INTERVENTION_MODEL, label: 'Intervention model' },
  { name: SECTION_NAME.IMPACT, label: 'Impact' },
]

export const data = MOCK_DATA
