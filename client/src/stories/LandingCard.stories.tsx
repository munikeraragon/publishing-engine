import React from 'react';
import { Story, Meta } from '@storybook/react';

import { LandingCard, LandingCardProps } from '../ui/LandingCard';

export default {
    title: 'Example/LandingCard',
    component: LandingCard
} as Meta;

const Template: Story<LandingCardProps> = (args) => <LandingCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    primaryHeader: 'Welcome!',
    secondaryHeader: "Let's Start Coding",
    description: 'This is a description',
    linkLabel1: 'See Projects',
    linkHref1: '#projects',
    linkLabel2: 'Read Articles',
    linkHref2: '/articles'
};
