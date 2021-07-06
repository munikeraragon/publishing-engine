import { ObjectType, InputType, Field } from 'type-graphql';

@ObjectType()
export class ContactMessage {
    @Field({ nullable: false })
    firstName!: string;

    @Field({ nullable: false })
    lastName!: string;

    @Field({ nullable: false })
    email!: string;

    @Field({ nullable: false })
    company!: string;

    @Field({ nullable: false })
    phone!: string;

    @Field({ nullable: false })
    message!: string;

    @Field({ nullable: false })
    country!: string;

    @Field()
    creationDate: Date;
}

@InputType()
export class ContactMessageInput {
    @Field({ nullable: false })
    firstName!: string;

    @Field({ nullable: false })
    lastName!: string;

    @Field({ nullable: false })
    email!: string;

    @Field({ nullable: false })
    company!: string;

    @Field({ nullable: false })
    phone!: string;

    @Field({ nullable: false })
    message!: string;

    @Field({ nullable: false })
    country!: string;
}
