import type { Preview } from "@storybook/react";

// https://storybook.js.org/docs/writing-docs/autodocs
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: {
        title: "Table of Contents",
        headingSelector: "h1, h2, h3",
      },
    },
  },
  tags: ["autodocs"],
};

export default preview;
