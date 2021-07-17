import { useFormStore } from './useFormStore';
import { Article } from '../article/Article';
import { useGetUserQuery } from '../../generated/apolloComponents';
import moment from 'moment';

export const NewPreview = () => {
    const { title, mainBody, mainImageUrl } = useFormStore((state) => state);
    const { data } = useGetUserQuery();
    
    return (
        <div className="flex-1 flex flex-col bg-white rounded border border-gray-100">
            <Article
                className="px-12 py-4"
                title={title}
                userIcon={data?.getUser.picture}
                coverImage={mainImageUrl}
                userName={data?.getUser.userName}
                creationDate={moment().format("MMM Do, YY")}
                readingTime={4}
                wordsNumber={2}
                articleBody={mainBody}
            />
        </div>
    );
};
