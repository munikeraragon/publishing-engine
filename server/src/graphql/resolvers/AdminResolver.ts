import { Query, Resolver, Authorized } from 'type-graphql';
import { UserService } from '../../sql-dal/User';
import { PostService } from '../../sql-dal/Post';
import { ContactMessageService } from '../../sql-dal/ContactMessage';
import { AdminInsight } from '../entities/Admin';

@Resolver()
export class AdminResolver {
    @Authorized('ADMIN')
    @Query((returns) => AdminInsight)
    async getAdminInsight(): Promise<AdminInsight> {
        return {
            userInsight: {
                totalUsers: await UserService.countAll(),
                users: await UserService.findAll()
            },
            contactMessageInsight: {
                totalMessages: await ContactMessageService.countAll(),
                contactMessages: await ContactMessageService.findAll()
            },
            postInsight: {
                totalPosts: await PostService.countAll()
            }
        };
    }
}
