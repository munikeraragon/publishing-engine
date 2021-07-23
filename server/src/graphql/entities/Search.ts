import { IsIn } from 'class-validator';
import {InputType, Field} from 'type-graphql';



@InputType()
export class SearchInput {
    @Field({ nullable: false })
    pageSize: number;

    @Field({ nullable: false })
    page: number;

    @Field({ nullable: false })
    @IsIn(['reactions', 'comments', 'creationDate'])
    sortBy: string

    @Field({ nullable: false })
    @IsIn(['desc', 'asc'])
    sortDirection: string

    @Field({ nullable: false })
    startDate: string

    @Field({ nullable: false })
    endDate: string
}