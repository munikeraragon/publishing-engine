import React from 'react';
import { Story, Meta } from '@storybook/react';

import { LandingCard } from '../ui/LandingCard';

export default {
  title: 'Example/LandingCard',
  component: LandingCard,
} as Meta;

const Template: Story = (args) => <LandingCard {...args} />;

export const Primary = Template.bind({});


