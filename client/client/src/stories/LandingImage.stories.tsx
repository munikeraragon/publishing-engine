import React from 'react';
import { Story, Meta } from '@storybook/react';

import { LandingImage } from '../ui/LandingImage';

export default {
  title: 'Example/LandingImage',
  component: LandingImage,
} as Meta;

const Template: Story = (args) => <LandingImage {...args} />;

export const Primary = Template.bind({});



