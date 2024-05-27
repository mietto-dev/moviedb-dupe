import { Card } from "@components";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Card",
  component: Card,
  subcomponents: {
    CardBody: Card.Body as React.FC<unknown>,
    CardHeader: Card.Header as React.FC<unknown>,
    CardFooter: Card.Footer as React.FC<unknown>,
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   children: {
  //     control: "text",
  //   },
  // },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const FullPicture: Story = {
  args: {
    coverImage:
      "https://media.themoviedb.org/t/p/w440_and_h660_face/7AkiDy6DVlfhJusglf6tvifX6dB.jpg",
    children: <>My Card content</>,
  },
};

export const WithFooter: Story = {
  args: {
    coverImage:
      "https://media.themoviedb.org/t/p/w276_and_h350_face/z6ZEqpIkh1LYQXgSNMcc8akW3ZR.jpg",
  },
  render: (args) => (
    <Card {...args}>
      <Card.Footer negative>Footer lalala</Card.Footer>
    </Card>
  ),
};

export const WithHeader: Story = {
  args: {
    coverImage:
      "https://media.themoviedb.org/t/p/w276_and_h350_face/z6ZEqpIkh1LYQXgSNMcc8akW3ZR.jpg",
  },
  render: (args) => (
    <Card {...args}>
      <Card.Header negative>Olarrr</Card.Header>
    </Card>
  ),
};

export const WithAll: Story = {
  args: {
    coverImage:
      "https://media.themoviedb.org/t/p/w276_and_h350_face/z6ZEqpIkh1LYQXgSNMcc8akW3ZR.jpg",
  },
  render: (args) => (
    <Card {...args}>
      <Card.Header negative>Titulo</Card.Header>
      Buceta
      <Card.Footer>Bl;alasla</Card.Footer>
    </Card>
  ),
};
