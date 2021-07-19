import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ActionCard, ActionCardProps } from '../ui/action-card/ActionCard';

export default {
    title: 'Example/ActionCard',
    component: ActionCard
} as Meta;

const Template: Story<ActionCardProps> = (args) => <ActionCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    src: 'https://www.educative.io/cdn-cgi/image/f=auto,fit=cover,w=620/v2api/collection/10370001/6445473125629952/image/5769023684870144',
    title: 'Integrate https security into your full-stack using Docker+LetsEncript+Nginx+React+Express',
    description:
        'Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds.',
    className: 'w-80 mx-2 border-2 border-gray-300'
};
