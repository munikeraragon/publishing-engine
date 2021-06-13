import React from 'react';
import { Story, Meta } from '@storybook/react';

import { TextInput, TextInputProps } from '../ui/TextInput';

export default {
    title: 'Example/TextInput',
    component: TextInput
} as Meta;

const Template: Story<TextInputProps> = (args) => <TextInput {...args} />;

export const Email = Template.bind({});
Email.args = {
    label: 'Email',
    name: 'Email'
};

export const Name = Template.bind({});
Name.args = {
    label: 'Name',
    name: 'Name',
    placeHolder: 'Type Name'
};
