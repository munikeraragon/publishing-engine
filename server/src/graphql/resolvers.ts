import { ContactMessage } from '../models/init-models';
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
                    ContactMessage.create({
                        ...contactMessage
                    });
                return 'Contact message has been saved';
            } catch (err) {
                return err;
            }
        }
    }
};
