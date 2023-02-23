import { addons } from '@storybook/addons';

addons.setConfig({
  // isFullscreen: false,
  // panelPosition: 'bottom',
  // enableShortcuts: true,
  // theme: undefined,
  // selectedPanel: undefined,
  // initialActive: 'sidebar',
  // sidebar: {
  //   showRoots: false,
  //   collapsedRoots: ['other'],
  // },
  previewTabs: {
    // the order of the tabs is configured by the order here
    // null means no override for the title
    'storybook/docs/panel': null,
    'usage-tab': null,
    canvas: null,
  },
});