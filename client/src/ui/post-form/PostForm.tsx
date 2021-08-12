import { Header } from './Header';
import { Preview } from './Preview';
import { Form } from './Form';
import { useFormStore } from './useFormStore';
import { EditorActions } from './EditorActions';
import { PostCard } from '../post-card/PostCard';
import { useGetUserQuery } from '../../generated/apolloComponents';
import moment from 'moment';

export const PostForm: React.FC = () => {
    const { previewShowing, description, title, mainImageUrl, tagsString, mainBody } = useFormStore(
        (state) => state
    );
    const user = useGetUserQuery().data?.getUser;

    return (
        <div className='py-2 flex flex-col md:px-8'>
            <div className='grid grid-cols-8'>
                <div className='col-span-5'>
                    <Header />
                </div>
            </div>

            <div className='flex-1 grid grid-cols-12 gap-x-8'>
                <div className='col-span-12 lg:col-span-8 flex flex-col bg-white'>
                    {previewShowing ? <Preview /> : <Form />}
                </div>

                <div className='hidden col-span-4 lg:flex justify-center'>
                    {previewShowing ? (
                        <PostCard
                            className='w-96 mx-4 border border-gray-200'
                            src={mainImageUrl}
                            title={title}
                            description={description}
                            userName={user?.userName}
                            userIcon={user?.userIcon}
                            tags={tagsString
                                .split(',')
                                .map((tag) => tag.trim())
                                .filter((tag) => tag)}
                            creationDate={moment().format('MMMM Do YYYY')}
                            readingTime={Math.round(mainBody.split(' ').length / 250)}
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

            <EditorActions className='mx-2' />
        </div>
    );
};
