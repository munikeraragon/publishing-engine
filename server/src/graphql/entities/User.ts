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
    email!: string;

    @Field({ nullable: false })
    locale!: string;

    @Field({ nullable: false })
    provider!: string;

    @Field({ nullable: false })
    picture!: string;

    @Field({ nullable: false })
    country!: string;

    @Field((type) => [String])
    roles!: string[];

    @Field()
    creationDate: Date;
}
