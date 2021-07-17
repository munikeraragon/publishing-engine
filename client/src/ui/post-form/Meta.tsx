import { CoverImage } from './CoverImage';
import { TagsField } from './TagsField';
import { Title } from './Title';
import { Description } from './Description';

export const Meta = () => {
    return (
        <div className=''>
            <CoverImage />
            <Title />
            <Description />
            <TagsField />
        </div>
    );
};
