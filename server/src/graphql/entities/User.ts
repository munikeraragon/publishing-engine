import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class User {
    @Field((type) => ID)
    id: number;

    @Field({ nullable: false })
    firstName!: string;

    @Field({ nullable: false })
    lastName!: string;

    @Field({ nullable: false })
    userName!: string;

    @Field({ nullable: false })
    email!: string;

    @Field({ nullable: false })
    locale!: string;

    @Field({ nullable: false })
    provider!: string;

    @Field({ nullable: false })
    picture!: string;

    @Field({ nullable: false })
    userIcon!: string;

    @Field({ nullable: false })
    role: string;

    @Field()
    creationDate: Date;
}

@ObjectType()
export class UserInput {
    @Field({ nullable: false })
    firstName!: string;

    @Field({ nullable: false })
    lastName!: string;

    @Field({ nullable: false })
    userName!: string;

    @Field({ nullable: false })
    email!: string;

    @Field({ nullable: false })
    locale!: string;

    @Field({ nullable: false })
    provider!: string;

    @Field({ nullable: false })
    picture!: string;

    @Field({ nullable: false })
    role: string;
}
