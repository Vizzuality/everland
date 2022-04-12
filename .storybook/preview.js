import React from 'react';
import { globalStyles } from '../src/stitches.config'
import { themes } from '@storybook/theming';
import { OverlayProvider } from '@react-aria/overlays';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: {
      order: [
        'Intro',
        'Docs',
        ['Install', 'Deploy', 'Authentication', 'Fetching', 'Media', 'Tests'],
        'Components',
      ],
    },
  },
  docs: {
    theme: themes.dark,
  },
};

const withGlobalStyles = (Story) => {
  globalStyles()
  return <Story />
}

export const decorators = [
  (Story) => {
    return (
      <OverlayProvider>
        <div>{Story()}</div>
      </OverlayProvider>
    );
  },
  withGlobalStyles
];
