import { Toolbar } from './Toolbar';
import MDEditor from '@uiw/react-md-editor';
import { useFormStore } from './useFormStore';
import '@uiw/react-md-editor/dist/markdown-editor.css';
import '@uiw/react-markdown-preview/dist/markdown.css';
import { useEffect, useRef } from 'react';

export const EditorBody = () => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const { mainBody, setMainBody } = useFormStore((state) => state);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = '0px';
            const scrollHeight = textareaRef.current.scrollHeight;
            textareaRef.current.style.height = scrollHeight + 'px';
        }
    }, [mainBody]);

    const text = (
        <div className=''>
            <textarea
                ref={textareaRef}
                data-gramm_editor='false'
                className='border-0 focus:ring-0 w-full overflow-hidden
                p-0 resize-none placeholder-gray-400 text-lg'
                id='article-form-title'
                aria-label='Post Title'
                placeholder='Write your post content here...'
                autoComplete='off'
                value={mainBody}
                onChange={(event) => {
                    setMainBody(event.target.value);
                }}
            />
        </div>
    );

    return (
        <div className='mt-4'>
            <Toolbar className='mb-2 -ml-2' />
            <MDEditor
                renderTextarea={() => text}
                className='border-0 flex-1 overfow-hidden'
                value={mainBody}
                preview='edit'
                hideToolbar={true}
                onChange={(body) => {
                    console.log('changing body');
                    setMainBody(body || '');
                }}
                visiableDragbar={false}
                placeholder='Write your post content here...'
            />
        </div>
    );
};
