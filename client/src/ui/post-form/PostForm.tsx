import { Header } from './Header';
import { Preview } from './Preview';
import { Form } from './Form';
import { useFormStore } from './useFormStore';
import { EditorActions } from './EditorActions';
import { ActionCard } from '../action-card/ActionCard';

export const PostForm: React.FC = () => {
    const { previewShowing, description, title, mainImageUrl } = useFormStore((state) => state);

    return (
        <div className='py-2 flex flex-col px-8'>
            <div className='grid grid-cols-8'>
                <div className='col-span-5'>
                    <Header />
                </div>
            </div>

            <div className='flex-1 grid grid-cols-12 gap-x-8'>
                <div className='col-span-8 flex flex-col bg-white'>
                    {previewShowing ? <Preview /> : <Form />}
                </div>

                <div className='col-span-4 flex justify-center'>
                    {previewShowing ? (
                        <ActionCard
                            className='h-96 w-80 mx-8'
                            src={mainImageUrl}
                            title={title}
                            description={description}
                            completed={0}
                        />
                    ) : (
                        <div className=''>
                            <h3>Editor Basics</h3>

                            <p> Use Markdown to write and format posts.</p>
                            <p> Commonly used syntax </p>

                            <h2>Headers</h2>
                            {'# This is an <h1> tag'}
                            {'## This is an <h2> tag'}
                            {'###### This is an <h6> tag'}

                            <h2>Emphasis</h2>
                            <h3>unorder</h3>
                            {'* Item 1'}
                            {'* Item 2'}
                            {'* Item 2a'}
                            {'* Item 2b'}
                            <h3>order</h3>
                            {'1. Item 1'}
                            {'1. Item 3'}
                            {'1. Item 3a'}
                            {'1. Item 3b'}

                            <h2>Images</h2>
                            {'![GitHub Logo](/images/logo.png)'}
                            {'Format: ![Alt Text](url)'}

                            <h2>Links</h2>

                            {'http://github.com - automatic!'}
                            {'[GitHub](http://github.com)'}
                        </div>
                    )}
                </div>
            </div>

            <EditorActions />
        </div>
    );
};
