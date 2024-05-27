import { Button } from "@components";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ButtonSize } from "./types";

const buttonSizeOptions = Object.keys(ButtonSize).filter((el) =>
  isNaN(Number(el))
);
const buttonSizeMapping = Object.fromEntries(
  Object.keys(ButtonSize)
    .filter((el) => isNaN(Number(el)))
    .map((key, idx) => [key, idx])
);

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Button Group",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    size: {
      control: "select",
      options: buttonSizeOptions,
      mapping: buttonSizeMapping,
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: "Primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
  },
};

export const Large: Story = {
  args: {
    size: ButtonSize.LARGE,
    children: "Large",
  },
};

export const Small: Story = {
  args: {
    size: ButtonSize.SMALL,
    children: "Small",
  },
};
