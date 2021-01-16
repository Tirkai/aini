import { Meta, Story } from "@storybook/react";
import React from "react";
import { Button } from "./Button";
import { GhostButton } from "./GhostButton";
import { IButtonProps } from "./IButtonProps";

const meta: Meta = {
    title: "Button",
    component: Button,
    argTypes: {
        children: {
            defaultValue: "Button",
            control: {
                type: "text",
            },
        },
    },
    parameters: {
        controls: { expanded: true },
    },
};

export default meta;

const DefaultButtonTemplate: Story<IButtonProps> = (args) => (
    <Button {...args} />
);

const GhostButtonTemplate: Story<{}> = () => <GhostButton />;

export const Default = DefaultButtonTemplate.bind({});
export const Primary = DefaultButtonTemplate.bind({});
export const Success = DefaultButtonTemplate.bind({});
export const Danger = DefaultButtonTemplate.bind({});
export const Ghost = GhostButtonTemplate.bind({});

Default.args = {};
Primary.args = { variant: "primary" };
Success.args = { variant: "success" };
Danger.args = { variant: "danger" };
