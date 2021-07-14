import { useFormStore } from './useFormStore';

export const Header: React.FC = () => {
    const { previewShowing, setPreviewShowing } = useFormStore((state) => state);
    return (
        <div className='flex mb-2 justify-items-center justify-end w-full'>
            <div>
                <button
                    onClick={() => {
                        setPreviewShowing(false);
                    }}
                    className={`mx-2 text-gray-800 font-medium py-1.5 px-4 hover:text-indigo-600
                        ${!previewShowing && 'border-b-2 border-indigo-500 font-semibold'}
                          hover:bg-indigo-50 rounded`}>
                    Edit
                </button>
                <button
                    onClick={() => {
                        setPreviewShowing(true);
                    }}
                    className={`mx-2 text-gray-800 font-medium hover:text-indigo-600
                    ${previewShowing && 'border-b-2 border-indigo-500 font-semibold'} 
                    py-1.5 px-4 hover:bg-indigo-50 rounded`}>
                    Preview
                </button>
            </div>
        </div>
    );
};
