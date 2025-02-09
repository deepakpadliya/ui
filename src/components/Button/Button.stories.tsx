import { fn } from "@storybook/test";

import { Button } from "./Button";

export default {
  title: "components/Button",
  component: Button,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {
    varient: {
      options: ["primary", "secondary", "tertiary"],
      control: "radio",
    },
    backgroundColor: { control: "color" },
    size: {
      options: ["small", "medium", "large"],
      control: "radio",
      inline: true
    },
  },
  args: { onClick: fn() },
};

export const Demo = {
  args: {
    size: "large",
    label: "Button",
  },
};