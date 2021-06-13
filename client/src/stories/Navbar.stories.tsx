import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Navbar } from '../ui/Navbar/Navbar';

export default {
    title: 'Example/Navbar',
    component: Navbar
} as Meta;

const Template: Story = (args) => <Navbar {...args} />;

export const Primary = Template.bind({});
