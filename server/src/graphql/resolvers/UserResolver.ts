import { Query, Resolver, Authorized } from 'type-graphql';
import { User } from '../entities/User';
import { UserService } from '../../sql-dal/User';
import { CurrentUser } from '../../logic/auth/current-user';

@Resolver()
export class UserResolver {
    @Authorized()
    @Query((returns) => User)
    async getUser(@CurrentUser() userId: number): Promise<User> {
        return { ...(await UserService.findById(userId)) };
    }
}
