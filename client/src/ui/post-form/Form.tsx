import { Meta } from './Meta';
import { EditorBody } from './EditorBody';

export const Form: React.FC = () => {
    return (
        <div className='flex-1 flex flex-col bg-white rounded border border-gray-200 px-12 py-6'>
            <Meta />
            <EditorBody />
        </div>
    );
};
