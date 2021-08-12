import { useRef, useEffect } from 'react';
import { useFormStore } from './useFormStore';

export const Title = () => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const { title, setTitle } = useFormStore((state) => state);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = '0px';
            const scrollHeight = textareaRef.current.scrollHeight;
            textareaRef.current.style.height = scrollHeight + 'px';
        }
    }, [title]);

    return (
        <div className='mt-4 mb-4 mb-1'>
            <textarea
                ref={textareaRef}
                data-gramm_editor='false'
                className='border-0 focus:ring-0 w-full
                    font-semibold text-4xl p-0 resize-none placeholder-gray-400'
                id='article-form-title'
                aria-label='Post Title'
                placeholder='New post title here...'
                autoComplete='off'
                value={title}
                onChange={(event) => {
                    setTitle(event.target.value);
                }}
                onKeyDown={(e: any) => {
                    if (e.keyCode === 13) {
                        e.preventDefault();
                    }
                }}
            />
        </div>
    );
};
