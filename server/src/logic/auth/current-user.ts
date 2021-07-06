import { createParamDecorator } from 'type-graphql';
import { Context } from './context.interface';

export const CurrentUser = () => {
    return createParamDecorator<Context>(({ context }) => context.user.id);
};
