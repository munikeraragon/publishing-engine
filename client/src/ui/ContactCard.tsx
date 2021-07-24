import { TextInput } from './TextInput';
import { SelectInput } from './SelectInput';
import countries from '../constants/countries.json';

export interface ContactCardProps {
    firstName: string;
    lastName: string;
    email: string;
    country: string;
    phone: string;
    company: string;
    message: string;
    submitting: boolean;
    setFirstName: (value: string) => void;
    setLastName: (value: string) => void;
    setEmail: (value: string) => void;
    setCountry: (value: string) => void;
    setPhone: (value: string) => void;
    setCompany: (value: string) => void;
    setMessage: (value: string) => void;
    onSubmit: () => void;
}

export const ContactCard: React.FC<ContactCardProps> = ({
    firstName,
    lastName,
    email,
    country,
    phone,
    company,
    message,
    submitting,
    setFirstName,
    setLastName,
    setEmail,
    setCountry,
    setPhone,
    setCompany,
    setMessage,
    onSubmit
}) => {
    return (
        <div className='shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-4 p-8'>
            <div>
                <TextInput
                    label='First name'
                    name='First name'
                    placeHolder='Your first name'
                    value={firstName}
                    required={true}
                    className='my-2'
                    onChange={(event) => {
                        setFirstName(event.target.value);
                    }}
                />
            </div>

            <div>
                <TextInput
                    label='Last name'
                    name='Last name'
                    placeHolder='Your last name'
                    value={lastName}
                    required={true}
                    className='my-2'
                    onChange={(event) => {
                        setLastName(event.target.value);
                    }}
                />
            </div>

            <div>
                <TextInput
                    label='Email'
                    name='Email'
                    placeHolder='example@acme.com'
                    value={email}
                    required={true}
                    className='my-2'
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}
                />
            </div>

            <div>
                <SelectInput
                    label='Country'
                    name='Country'
                    value={country}
                    required={true}
                    options={countries}
                    className='my-2'
                    onChange={(event) => {
                        setCountry(event.target.value);
                    }}
                />
            </div>

            <div>
                <TextInput
                    label='Phone number'
                    name='Phone bumber'
                    placeHolder='(555) 555-5555'
                    value={phone}
                    required={true}
                    className='my-2'
                    onChange={(event) => {
                        setPhone(event.target.value);
                    }}
                />
            </div>

            <div>
                <TextInput
                    label='Company'
                    name='Company'
                    placeHolder='Acme Inc.'
                    value={company}
                    className='my-2'
                    onChange={(event) => {
                        setCompany(event.target.value);
                    }}
                />
            </div>

            <div className='col-span-2'>
                <TextInput
                    label='How can we help you?'
                    name='Message'
                    area={true}
                    value={message}
                    required={true}
                    className='my-2'
                    onChange={(event) => {
                        setMessage(event.target.value);
                    }}
                />
            </div>

            <div className='col-span-2'>
                <p className='text-sm mb-2 text-gray-600'>
                    By clicking &quot;Submit,&quot; I acknowledge receipt of the CodeGrow Privacy
                    Policy.
                </p>

                <p className='text-sm my-2 text-pink-600'>
                    Fields marked with an asterisk (*) are required.
                </p>
            </div>

            <div className='col-span w-48'>
                <button
                    onClick={onSubmit}
                    className={`${
                        submitting ? 'opacity-60' : ''
                    } w-full flex items-center justify-center px-8
                            py-2 border border-transparent text-base font-medium
                            rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                            md:text-lg md:px-10`}>
                    {submitting ? 'Submiting...' : 'Submit'}
                </button>
            </div>
        </div>
    );
};
