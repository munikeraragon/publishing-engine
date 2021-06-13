import type { Sequelize, Model } from 'sequelize';
import { ContactMessage } from './ContactMessage';
import type { ContactMessageAttributes, ContactMessageCreationAttributes } from './ContactMessage';
import { User } from './User';
import type { UserAttributes, UserCreationAttributes } from './User';

export { ContactMessage, User };

export type {
    ContactMessageAttributes,
    ContactMessageCreationAttributes,
    UserAttributes,
    UserCreationAttributes
};

export function initModels(sequelize: Sequelize) {
    ContactMessage.initModel(sequelize);
    User.initModel(sequelize);

    return {
        ContactMessage,
        User
    };
}
