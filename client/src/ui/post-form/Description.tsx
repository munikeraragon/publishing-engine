import { useFormStore } from './useFormStore';

export const Description = () => {
    const { description, setDescription } = useFormStore((state) => state);

    return (
        <div className='my-4'>
            <textarea
                data-gramm_editor='false'
                className='border-0 focus:ring-0 h-10 w-full
                    font-semibold text-2xl p-0 resize-none placeholder-gray-400'
                id='article-form-title'
                aria-label='Post Description'
                placeholder='New post description here...'
                autoComplete='off'
                value={description}
                onChange={(event) => {
                    setDescription(event.target.value);
                }}
                onFocus={() => {}}
                onInput={() => {}}
                autoFocus={true}
                onKeyDown={(e) => {
                    if (e.keyCode === 13) {
                        e.preventDefault();
                    }
                }}
            />
        </div>
    );
};
