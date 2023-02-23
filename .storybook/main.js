module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    // "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    // "@storybook/addon-essentials",
    "@storybook/addon-docs",
    "@storybook/addon-actions",
    "@storybook/addon-controls",
    '@storybook/addon-viewport',

    // '@storybook/preset-typescript',
    // "@storybook/addon-notes/register", //notes to import markdown into stories (displayed in "notes" tab)
    // Other Storybook addons
    "./usage-tab/register.js",
  ],
  // "features": {
  //   storyStoreV7: true,
  //   "postcss": false,
  //   previewMdx2: true,
  // },
  // "framework": "@storybook/vue",
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    config.module.rules.push(
      {
        // test: /\.mdx$/,
        // exclude: /node_modules/,
        // use: [
        //   {
        //     loader: 'babel-loader',

        //   },
        //   {
        //     loader: '@mdx-js/loader',

        //   },
        // ],
        // test: /\.(ts|js)x?$/,
        // exclude: /node_modules/,
        // use: {
        //   loader: 'babel-loader',
        //   options: {
        //     presets: [
        //       "@babel/preset-env",
        //       "@babel/preset-react",
        //       "@babel/preset-typescript",
        //     ],
        //     plugins: [["@babel/plugin-proposal-decorators", { "legacy": true }],
        //     ],
        //   }
        // }
      },

      // {
      //   test: /\.scss$/,
      //   use: ["style-loader", "css-loader", "sass-loader"]
      // },

    );

    return config;
  },
  staticDirs: ["../public", "../public-storybook"]
}
