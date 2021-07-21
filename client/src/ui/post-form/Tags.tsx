import { useState } from 'react';
import { Listbox } from '@headlessui/react';
import { useFormStore } from './useFormStore';

const people = [
    { id: 1, name: 'code' },
    { id: 2, name: 'dev' },
    { id: 3, name: 'react' },
    { id: 4, name: 'docker' },
    { id: 5, name: 'typescript' },
    { id: 6, name: 'python' },
    { id: 7, name: 'machine learning' },
    { id: 8, name: 'node' },
    { id: 9, name: 'go' },
    { id: 10, name: 'neo4j' }
];

export const Tags = () => {
    const [selected, setSelected] = useState(people[0]);
    const [open, setOpen] = useState(false);
    const { tagsString, setTagsString } = useFormStore((state) => state);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTagsString(event.target.value);
    };

    return (
        <div>
            <Listbox value={selected} onChange={setSelected}>
                <div className='relative mt-1'>
                    <div className='relative rounded-md font-mono'>
                        <input
                            type='text'
                            name='price'
                            id='price'
                            className='border-0 focus:ring-0 p-0 block w-full rounded-md'
                            placeholder='Add up to 4 tags...'
                            value={tagsString}
                            onChange={handleChange}
                        />
                    </div>
                    {open && (
                        <Listbox.Options
                            static
                            className='absolute w-full py-1 mt-4 -mx-4 overflow-auto
                        text-base bg-white rounded-md shadow-primary max-h-96
                        ring-1 ring-black ring-opacity-5 focus:outline-none
                        border-2 border-gray-700 sm:text-sm z-10'>
                            {people.map((person) => (
                                <Listbox.Option
                                    key={person.id}
                                    className={({ active }) =>
                                        `${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'}
                                cursor-default select-none relative p-1 font-semibold`
                                    }
                                    value={person}>
                                    <div
                                        className={`${
                                            person.id === selected.id
                                                ? 'text-indigo-600 bg-gray-100'
                                                : ''
                                        } block truncate`}>
                                        <span className='block truncate py-3 px-2'>
                                            {person.name}
                                        </span>
                                    </div>
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    )}
                </div>
            </Listbox>
        </div>
    );
};
