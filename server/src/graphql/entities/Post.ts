import { ObjectType, InputType, Field, ID } from 'type-graphql';

@ObjectType()
export class ImageMapping {
    @Field((type) => ID)
    id: number;

    @Field({ nullable: false })
    label: string;
}

@ObjectType()
export class SignedPost {
    @Field((type) => ID)
    id: number;

    @Field({ nullable: false })
    userName!: string;

    @Field({ nullable: false })
    title!: string;

    @Field({ nullable: false })
    prettyTitle!: string;

    @Field({ nullable: false })
    mainImageId: number;

    @Field({ nullable: false })
    imagesNumber!: number;

    @Field({ nullable: false })
    paragraphsNumber!: number;

    @Field({ nullable: false })
    wordsNumber!: number;

    @Field((type) => [ImageMapping])
    images!: ImageMapping[];

    @Field({ nullable: false })
    readingTime!: number;

    @Field({ nullable: false })
    creationDate!: string;

    @Field({ nullable: false })
    presignedUrl!: string;
}

@ObjectType()
export class Post {
    @Field((type) => ID)
    id: number;

    @Field({ nullable: false })
    userName!: string;

    @Field({ nullable: false })
    title!: string;

    @Field({ nullable: false })
    prettyTitle!: string;

    @Field({ nullable: false })
    description!: string;

    @Field({ nullable: false })
    mainImageId: number;

    @Field({ nullable: false })
    imagesNumber!: number;

    @Field({ nullable: false })
    paragraphsNumber!: number;

    @Field({ nullable: false })
    wordsNumber!: number;

    @Field((type) => [ImageMapping])
    images!: ImageMapping[];

    @Field({ nullable: false })
    readingTime!: number;

    @Field({ nullable: false })
    creationDate!: string;
}

@InputType()
export class PostInput {
    @Field({ nullable: false })
    title!: string;

    @Field({ nullable: false })
    mainImageId: number;

    @Field({ nullable: false })
    description!: string;

    @Field({ nullable: false })
    imagesNumber!: number;

    @Field((type) => [Number])
    imagesIds!: number[];

    @Field({ nullable: false })
    paragraphsNumber!: number;

    @Field({ nullable: false })
    wordsNumber!: number;

    @Field({ nullable: false })
    readingTime!: number;

    @Field({ nullable: false })
    publish!: boolean;
}
