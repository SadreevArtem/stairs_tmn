import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { InfoBlockCard } from "./InfoBlockCard";

export default {
  title: "modules/InfoCards/components/InfoBlockCard",
  component: InfoBlockCard,
  parameters: {},
  argTypes: {
    image: { type: "string" },
    link: { type: "string" },
    description: { type: "string" },
    title: { type: "string" }
  }
} as ComponentMeta<typeof InfoBlockCard>;

const Template: ComponentStory<typeof InfoBlockCard> = (args) => <InfoBlockCard {...args} />;
export const Default = Template.bind({});
Default.args = {
  image: "/mock-images/1.png",
  title: "Title",
  description: "description",
  link: "#"
};
