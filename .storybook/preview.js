// import '../src/plugins/infineonIcons';
import '../src/global/global-theme.scss'

import {
  defineCustomElements,
  applyPolyfills,
} from '../loader';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

applyPolyfills().then(() => {
  defineCustomElements(window);
});

export const parameters = {
  a11y: {
    config: {
      rules: [
        {
          id: 'list',
          enabled: false,
        },
        {
          id: 'listitem',
          enabled: false,
        },
        {
          id: 'color-contrast',
          enabled: false,
        },
      ],
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS, // newViewports would be an ViewportMap. (see below for examples)
  },
  viewMode: "docs",
  // docs: {
  //   source: {
  //     state: 'open',
  //   },
  // },
  options: {
    storySort: {
      order: [
        'Setup & Info',
        [
          'Getting started',
        ],
        'Components',
        'Contact'
      ]
    }
  }
}
