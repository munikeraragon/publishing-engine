import { ObjectType, Field } from 'type-graphql';
import { ContactMessage } from './ContactMessage';
import { User } from './User';

@ObjectType()
export class UserInsight {
    @Field((type) => Number)
    totalUsers!: number;

    @Field((type) => [User])
    users!: User[];
}

@ObjectType()
export class ContactMessageInsight {
    @Field((type) => Number)
    totalMessages!: number;

    @Field((type) => [ContactMessage])
    contactMessages!: ContactMessage[];
}

@ObjectType()
export class PostInsight {
    @Field((type) => Number)
    totalPosts!: number;
}

@ObjectType()
export class AdminInsight {
    @Field((type) => UserInsight)
    userInsight: UserInsight;

    @Field((type) => PostInsight)
    postInsight: PostInsight;

    @Field((type) => ContactMessageInsight)
    contactMessageInsight: ContactMessageInsight;
}
