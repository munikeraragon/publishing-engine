import { Header } from './Header';
import { Preview } from './Preview';
import { Form } from './Form';
import { useFormStore } from './useFormStore';
import { EditorActions } from './EditorActions';

export const PostForm: React.FC = () => {
    const previewShowing = useFormStore((state) => state.previewShowing);
    return (
        <div className='py-2 flex flex-col px-8'>
            <div className='grid grid-cols-8'>
                <div className='col-span-5'>
                    <Header />
                </div>
            </div>

            <div className='flex-1 grid grid-cols-8 gap-x-8'>
                <div className='col-span-5 flex flex-col'>
                    {previewShowing ? <Preview /> : <Form />}
                </div>

                <div className='col-span-3 flex'>
                    Writing a Great Post Title Think of your post title as a super short (but
                    compelling!) description — like an overview of the actual post in one short
                    sentence. Use keywords where appropriate to help ensure people can find your
                    post by search.
                </div>
            </div>

            <EditorActions />
        </div>
    );
};
