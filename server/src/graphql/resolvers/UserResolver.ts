import { Query, Resolver, Authorized } from 'type-graphql';
import { User } from '../entities/User';
import { UserService } from '../../sql-dal/User';
import { CurrentUser } from '../../logic/auth/current-user';
import { S3ImageService } from '../../s3-dal/Image';
import sha256 from 'crypto-js/sha256';
@Resolver()
export class UserResolver {
    @Authorized()
    @Query((returns) => User)
    async getUser(@CurrentUser() userId: number): Promise<User> {
        const user = await UserService.findById(userId);
        const userIcon = await S3ImageService.downloadUserIcon(sha256(user.userName).toString());
        return { ...user, userIcon };
    }
}
