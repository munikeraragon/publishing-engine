import { Query, Resolver, Authorized, Mutation, Arg } from 'type-graphql';
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

    @Authorized()
    @Mutation((returns) => String)
    async follow(@CurrentUser() userId: number, @Arg('creatorId') creatorId: number) {
        return await UserService.follow(userId, creatorId);
    }
}
