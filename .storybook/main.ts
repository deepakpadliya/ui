/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],

  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-mdx-gfm"
  ],

  core:{
    builder: '@storybook/builder-vite'
  },

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript"
  },
  async viteFinal(config) {
    // Merge custom configuration into the default config
    const { mergeConfig } = await import('vite');
 
    return mergeConfig(config, {
      // Add dependencies to pre-optimization
      optimizeDeps: {
        include: ['storybook-dark-mode'],
      },
    });
  },
};
export default config;
