import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "Seconadary",
    className:
      "bg-white hover:bg-white text-blue-500 hover❣️text-blue-600 border-blue-500 hover:border-blue-600",
  },
};

export const Success: Story = {
  args: {
    label: "Success",
    className: "bg-green-500 hover:bg-green-600",
  },
};

export const Danger: Story = {
  args: {
    label: "Danger",
    className: "bg-red-500 hover:bg-red-600",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    disabled: true,
  },
};
