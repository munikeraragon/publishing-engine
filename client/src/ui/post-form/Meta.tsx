import { CoverImage } from './CoverImage';
import { TagsField } from './TagsField';
import { Title } from './Title';
import { Description } from './Description';

export const Meta = () => {
    return (
        <div className='px-8 py-4'>
            <CoverImage />
            <Title />
            <Description />
            <TagsField />
        </div>
    );
};
