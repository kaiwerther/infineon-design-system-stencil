import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { inlineSvg } from 'stencil-inline-svg';

export const config: Config = {
  namespace: 'infineon-design-system-stencil',
  globalScript: 'src/utils/utils.ts',

  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      generateTypeDeclarations: true,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  
  plugins: [
    sass(),
    inlineSvg(),
  ],
  extras: {
    cloneNodeFix: true,
    experimentalImportInjection: true,
  },
};
