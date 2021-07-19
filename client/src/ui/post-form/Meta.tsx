import { CoverImage } from './CoverImage';
import { Title } from './Title';
import { Description } from './Description';
import { Tags } from './Tags';

export const Meta = () => {
    return (
        <div>
            <CoverImage />
            <Title />
            <Description />
            <Tags />
        </div>
    );
};
