import { useFormStore } from './useFormStore';

export const AutoCompleteTextArea = () => {
    const { mainBody, setMainBody } = useFormStore((state) => state);
    return (
        <div className='m-4 flex-1'>
            <textarea
                data-gramm_editor='false'
                id='article-form-body'
                className='border-0 focus:ring-0 w-full h-full h-48
                     text-lg p-0 resize-none placeholder-gray-400'
                aria-label='Post body'
                placeholder=''
                autoComplete='on'
                value={mainBody}
                onChange={(event) => {
                    setMainBody(event.target.value);
                }}
                autoFocus={true}
            />
        </div>
    );
};
