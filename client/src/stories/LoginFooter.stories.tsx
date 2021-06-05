import React from 'react';
import { Story, Meta } from '@storybook/react';

import { LoginFooter, LoginFooterProps } from '../ui/LoginFooter';

export default {
    title: 'Example/LoginFooter',
    component: LoginFooter
} as Meta;

const Template: Story<LoginFooterProps> = (args) => <LoginFooter {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'CodeGrow',
    privacyHref: 'https://github.com/munikeraragon/blog',
    reportHref: '',
    githubHref: 'https://github.com/munikeraragon/publishing-engine'
};
