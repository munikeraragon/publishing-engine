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
    id!: number;

    @Field({ nullable: false })
    userName!: string;

    @Field({ nullable: false })
    userIcon!: string;

    @Field({ nullable: false })
    userLocale!: string;

    @Field({ nullable: false })
    userCreationDate!: string;

    @Field({ nullable: false })
    userPicture!: string;

    @Field({ nullable: false })
    title!: string;

    @Field((type) => [String])
    tags!: string[];

    @Field({ nullable: false })
    prettyTitle!: string;

    @Field({ nullable: false })
    mainImageId!: number;

    @Field({ nullable: false })
    images!: number;

    @Field({ nullable: false })
    paragraphs!: number;

    @Field({ nullable: false })
    words!: number;

    @Field((type) => [ImageMapping])
    imagesMapping!: ImageMapping[];

    @Field({ nullable: false })
    readingTime!: number;

    @Field({ nullable: false })
    likes!: number;

    @Field({ nullable: false })
    saved!: number;

    @Field({ nullable: false })
    comments!: number;

    @Field({ nullable: false })
    creationDate!: string;

    @Field({ nullable: false })
    presignedUrl!: string;
}

@ObjectType()
export class Post {
    @Field((type) => ID)
    id!: number;

    @Field({ nullable: false })
    userName!: string;

    @Field({ nullable: false })
    userIcon!: string;

    @Field({ nullable: false })
    userLocale!: string;

    @Field({ nullable: false })
    userCreationDate!: string;

    @Field({ nullable: false })
    userPicture!: string;

    @Field({ nullable: false })
    title!: string;

    @Field((type) => [String])
    tags!: string[];

    @Field({ nullable: false })
    prettyTitle!: string;

    @Field({ nullable: false })
    description!: string;

    @Field({ nullable: false })
    mainImageId: number;

    @Field({ nullable: false })
    images!: number;

    @Field({ nullable: false })
    paragraphs!: number;

    @Field({ nullable: false })
    likes!: number;

    @Field({ nullable: false })
    saved!: number;

    @Field({ nullable: false })
    comments!: number;

    @Field({ nullable: false })
    words!: number;

    @Field((type) => [ImageMapping])
    imagesMapping!: ImageMapping[];

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
    images!: number;

    @Field((type) => [Number])
    imagesIds!: number[];

    @Field((type) => [String])
    tags!: string[];

    @Field({ nullable: false })
    paragraphs!: number;

    @Field({ nullable: false })
    words!: number;

    @Field({ nullable: false })
    readingTime!: number;

    @Field({ nullable: false })
    publish!: boolean;
}
