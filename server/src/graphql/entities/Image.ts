import { ObjectType, InputType, Field, ID } from 'type-graphql';

@ObjectType()
export class Image {
    @Field((type) => ID)
    id: number;

    @Field({ nullable: false })
    label!: string;

    @Field({ nullable: false })
    presignedUrl!: string;
}

@InputType()
export class ImageInput {
    @Field({ nullable: false })
    label!: string;
}
