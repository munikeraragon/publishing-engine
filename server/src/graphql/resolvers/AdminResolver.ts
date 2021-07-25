import { Query, Resolver, Authorized } from 'type-graphql';
import { UserService } from '../../sql-dal/User';
import { PostService } from '../../sql-dal/Post';

@Resolver()
export class AdminResolver {
    @Authorized('ADMIN')
    @Query((returns) => Number)
    async getTotalPosts(): Promise<number | string> {
        return await PostService.countAll();
    }

    @Authorized('ADMIN')
    @Query((returns) => Number)
    async getTotalUsers(): Promise<number | string> {
        return await UserService.countAll();
    }
}
