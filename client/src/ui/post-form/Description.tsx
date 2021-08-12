import { useEffect, useRef } from 'react';
import { useFormStore } from './useFormStore';

export const Description = () => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const { description, setDescription } = useFormStore((state) => state);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = '0px';
            const scrollHeight = textareaRef.current.scrollHeight;
            textareaRef.current.style.height = scrollHeight + 'px';
        }
    }, [description]);

    return (
        <div className='mb-2'>
            <textarea
                ref={textareaRef}
                data-gramm_editor='false'
                className='border-0 focus:ring-0 w-full
                    font-semibold text-2xl p-0 resize-none placeholder-gray-400'
                id='article-form-title'
                aria-label='Post Description'
                placeholder='New post description here...'
                autoComplete='off'
                value={description}
                onChange={(event) => {
                    setDescription(event.target.value);
                }}
                onKeyDown={(e) => {
                    if (e.keyCode === 13) {
                        e.preventDefault();
                    }
                }}
            />
        </div>
    );
};
