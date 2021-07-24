import { useFormStore } from './useFormStore';

export const Title = () => {
    const { title, setTitle } = useFormStore((state) => state);

    return (
        <div className='mt-4 mb-1'>
            <textarea
                data-gramm_editor='false'
                className='border-0 focus:ring-0 h-12 w-full
                    font-semibold text-4xl p-0 resize-none placeholder-gray-400'
                id='article-form-title'
                aria-label='Post Title'
                placeholder='New post title here...'
                autoComplete='off'
                value={title}
                onChange={(event) => {
                    console.log("changing title")
                    setTitle(event.target.value);
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
