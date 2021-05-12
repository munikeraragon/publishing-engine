import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ActionCard, ActionCardProps } from '../ui/ActionCard';

export default {
  title: 'Example/ActionCard',
  component: ActionCard,
} as Meta;

const Template: Story<ActionCardProps> = (args) => <ActionCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  src: "https://ethereum.org/static/a44134e541c72364beb121234ab5864e/19ca5/infrastructure_transparent.png",
  title: "Title",
  description: "Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds.",
  className:"w-96 mx-2"
};


