import { AuthChecker } from 'type-graphql';
import { Context } from './context.interface';

// create auth checker function
export const authChecker: AuthChecker<Context> = ({ context: { user } }, roles) => {
    if (roles.length === 0) {
        // if `@Authorized()`, check only if user exists
        return user.id !== undefined;
    }
    // there are some roles defined now
    if (!user.id) {
        // and if no user, restrict access
        return false;
    }
    // grant access if user possesses the required role
    return roles.includes(user.role);
};
