module.exports = {
  "stories": [ 
     "../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-docs",
        // Other Storybook addons
      "./usage-tab/register.js",
      ],
  "features": {
    storyStoreV7: true,
    "postcss": false,
    previewMdx2: true,

  },
  "framework": "@storybook/html",
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
    });

    return config;
  },
  staticDirs: ["../public", "../public-storybook"]
}
