import React from 'react';
import { Story, Meta } from '@storybook/react';

import { LandingImage, LandingImageProps } from '../ui/LandingImage';

export default {
    title: 'Example/LandingImage',
    component: LandingImage
} as Meta;

const Template: Story<LandingImageProps> = (args) => <LandingImage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    src: 'https://ethereum.org/static/5d3af9eb308978e7a078bf51022d8a5c/0dadc/merge.png',
    alt: 'Image of a spaceship'
};
