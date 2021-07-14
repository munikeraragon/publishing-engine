import { Toolbar } from './Toolbar';
import { AutoCompleteTextArea } from './AutoCompleteTextArea';

export const EditorBody = () => {
    return (
        <div className='flex flex-col flex-1'>
            <Toolbar />

            <AutoCompleteTextArea />
        </div>
    );
};
