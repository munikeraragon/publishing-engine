import { Mutation, Query, Resolver, Arg } from 'type-graphql';
import { ContactMessage, ContactMessageInput } from '../entities/ContactMessage';
import { ContactMessageService } from '../../sql-dal/ContactMessage';

@Resolver()
export class ContactMessageResolver {
    @Query((returns) => [ContactMessage])
    async getContactMessages(): Promise<ContactMessage[]> {
        const messages = await ContactMessageService.findAll();
        console.log('messages');
        console.log(messages);
        return messages;
    }

    @Mutation((returns) => String)
    async createContactMessage(
        @Arg('contactMessageInput') contactMessageInput: ContactMessageInput
    ): Promise<String | null> {
        const response = await ContactMessageService.create(contactMessageInput);
        console.log('response');
        console.log(response);
        return response;
    }
}
