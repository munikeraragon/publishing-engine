import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class Tag {
    @Field((type) => ID)
    id!: number;

    @Field({ nullable: false })
    name!: string;
}
