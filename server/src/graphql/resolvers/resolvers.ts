import { ContactMessage } from '../../sql-dal/ContactMessage';
import { IResolvers } from 'graphql-tools';

export const resolvers: IResolvers = {
    Query: {
        getContactMessages: async () => {
            try {
                const contactMessages = await ContactMessage.findAll();
                return contactMessages;
            } catch (err) {
                return err;
            }
        }
    },
    Mutation: {
        createContactMessage: async (_, { contactMessage }) => {
            try {
                (await ContactMessage) &&
                    ContactMessage.findOrCreate({
                        ...contactMessage
                    });
                return 'Contact message has been saved';
            } catch (err) {
                return err;
            }
        }
    }
};
