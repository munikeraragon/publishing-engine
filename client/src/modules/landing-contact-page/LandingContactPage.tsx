import { useState } from 'react';
import { useCreateContactMessageMutation } from '../../generated/apolloComponents';
import { ContactCard } from '../../ui/ContactCard';

import {
    DockerIcon,
    FirebaseIcon,
    GolangIcon,
    HtmlIcon,
    JavaIcon,
    JavascriptIcon,
    KubernetsIcon,
    PythonIcon,
    ReactIcon,
    RubyIcon,
    TypescriptIcon
} from '../../modules/SVGIcons';

export const LandingContactPage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [country, setCountry] = useState('United States');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [createContactMessage] = useCreateContactMessageMutation();

    const clearForm = () => {
        setTimeout(() => {
            setFirstName('');
            setLastName('');
            setEmail('');
            setCompany('');
            setPhone('');
            setMessage('');
            setCountry('United States');
            setSubmitting(false);
        }, 1000);
    };

    const onSubmit = async () => {
        try {
            setSubmitting(true);
            await createContactMessage({
                variables: {
                    contactMessage: {
                        firstName,
                        lastName,
                        email,
                        company,
                        phone,
                        message,
                        country
                    }
                }
            })
                .then(() => {
                    clearForm();
                })
                .catch(() => {
                    clearForm();
                });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div id='contact' className='pb-10' style={{ background: 'rgb(247, 248, 253)' }}>
            <div className='max-w-7xl m-auto grid grid-cols-1 lg:grid-cols-2 gap-8'>
                <div className='pt-10 mx-2'>
                    <div className='pb-8'>
                        <h1 className='text-2xl md:text-3xl tracking-tight font-bold text-gray-800'>
                            Join the comunity
                        </h1>
                    </div>

                    <div className='grid grid-cols-5 gap-x-0 gap-y-6 mt-12'>
                        <div className='flex shadow h-20 w-20 items-center justify-center bg-white rounded'>
                            <ReactIcon />
                        </div>

                        <div className='flex shadow h-20 w-20 items-center justify-center bg-white rounded'>
                            <DockerIcon />
                        </div>

                        <div className='flex shadow h-20 w-20 items-center justify-center bg-white rounded'>
                            <PythonIcon />
                        </div>

                        <div className='flex shadow h-20 w-20 items-center justify-center bg-white rounded'>
                            <JavascriptIcon />
                        </div>

                        <div className='flex shadow h-20 w-20 items-center justify-center bg-white rounded'>
                            <JavaIcon />
                        </div>

                        <div className='flex shadow h-20 w-20 items-center justify-center bg-white rounded'>
                            <HtmlIcon />
                        </div>

                        <div className='flex shadow h-20 w-20 items-center justify-center bg-white rounded'>
                            <FirebaseIcon />
                        </div>

                        <div className='flex shadow h-20 w-20 items-center justify-center bg-white rounded'>
                            <TypescriptIcon />
                        </div>

                        <div className='flex shadow h-20 w-20 items-center justify-center bg-white rounded'>
                            <RubyIcon />
                        </div>

                        <div className='flex shadow h-20 w-20 items-center justify-center bg-white rounded'>
                            <KubernetsIcon />
                        </div>

                        <div className='flex shadow h-20 w-20 items-center justify-center p-2 col-start-3 bg-white rounded'>
                            <GolangIcon />
                        </div>
                    </div>

                    <div className='flex text-lg  text-indigo-500 py-4 mt-12'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='28'
                            height='28'
                            fill='currentColor'
                            viewBox='0 0 24 24'>
                            <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                        </svg>
                        <span className='ml-4 text-gray-800'>Contribute to the project</span>
                    </div>
                    <div className='flex text-lg text-indigo-500 py-4'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='28'
                            height='28'
                            fill='currentColor'
                            viewBox='0 0 449.848 449.848'>
                            <g>
                                <path
                                    d='M386.88,303.947c-1.335,1.445-3.151,2.179-4.969,2.179c-1.648,0-3.296-0.597-4.588-1.796
                                    c-18.029-16.667-25.957-30.117-31.751-39.945c-6.317-10.725-9.381-15.814-21.983-16.684c0.006,0.426,0.038,0.892,0.038,1.308
                                    c0,41.172-9.631,78.797-25.531,107.755c1.905,0.229,3.802,0.667,5.669,1.663c6.901,3.672,10.402,11.962,10.402,24.629
                                    c0,30.392,1.05,49.155,15.502,53.555c3.572,1.089,5.586,4.865,4.503,8.438c-0.893,2.923-3.573,4.8-6.479,4.8
                                    c-0.64,0-1.307-0.094-1.97-0.295c-25.088-7.634-25.088-37.555-25.088-66.497c0-8.093-1.745-11.896-3.245-12.687
                                    c-2.016-1.092-6.754,0.846-8.828,2.236c-0.173,0.113-0.383,0.136-0.569,0.234c-18.687,25.932-43.267,41.708-70.215,41.708
                                    c-27.497,0-52.548-16.416-71.361-43.316c-1.209,1.642-2.337,5.329-2.337,11.819c0,28.943,0,58.862-25.094,66.497
                                    c-0.64,0.206-1.307,0.3-1.954,0.3c-2.9,0-5.581-1.877-6.474-4.8c-1.077-3.572,0.931-7.349,4.51-8.438
                                    c14.446-4.399,15.497-23.163,15.497-53.555c0-11.441,2.883-19.266,8.519-23.403c-16.854-29.312-27.124-68.099-27.124-110.644
                                    c0-2.091,0.108-4.328,0.257-6.632c-2.792,2.697-5.019,6.436-7.94,11.403c-5.79,9.828-13.719,23.277-31.755,39.945
                                    c-1.291,1.193-2.938,1.796-4.584,1.796c-1.812,0-3.628-0.729-4.97-2.179c-2.534-2.736-2.364-7.015,0.377-9.554
                                    c16.564-15.315,23.612-27.272,29.27-36.882c6.336-10.729,11.195-17.882,21.713-21.215c3.277-18.379,9.849-40.088,19.01-60.969
                                    c-5.155-2.216-9.669-4.356-13.433-6.249l-3.443-1.732l1.851-3.642c10.501-20.659,24.537-37.767,40.629-49.885
                                    c-8.328-4.035-13.242-11.901-17.374-18.626c-6.073-9.896-9.154-13.902-16.169-13.372c-3.639,0.219-6.959-2.524-7.228-6.251
                                    c-0.273-3.732,2.528-6.971,6.248-7.24c15.94-1.086,22.944,10.463,28.668,19.778c5.55,9.041,9.357,14.592,17.287,14.874
                                    c1.395,0.049,2.594,0.61,3.638,1.373c0.794-0.416,1.566-0.908,2.364-1.302c-0.219-1.91-0.339-3.831-0.339-5.732
                                    c0-20.747,12.75-38.229,30.042-43.497C196.394,16.14,174.621,5.168,174.346,5.04L176.804,0c1.17,0.572,24.646,12.408,34.823,41.981
                                    c1.747-0.252,3.509-0.427,5.313-0.427c0.766,0,1.516,0.084,2.271,0.125C229.438,12.323,252.754,0.566,253.926,0l2.456,5.04
                                    c-0.257,0.129-21.618,10.96-31.446,37.395c18.737,4.119,32.903,22.409,32.903,44.289c0,1.901-0.111,3.822-0.33,5.732
                                    c1.595,0.78,3.136,1.727,4.701,2.596c0.93-0.539,1.947-0.936,3.097-0.977c7.935-0.279,11.737-5.833,17.288-14.866
                                    c5.729-9.324,12.761-20.979,28.673-19.783c3.727,0.269,6.527,3.508,6.253,7.24c-0.268,3.726-3.582,6.471-7.233,6.251
                                    c-7.032-0.577-10.095,3.475-16.169,13.371c-4.095,6.674-8.975,14.463-17.183,18.523c16.24,12.776,30.243,30.61,40.547,52.183
                                    l1.62,3.413l-3.096,1.778c-4.613,2.648-9.343,4.985-14.129,7.182c10.488,22.974,17.744,46.498,20.498,64.889
                                    c20.497,0.887,26.343,8.854,34.846,23.262c5.655,9.604,12.704,21.565,29.268,36.881
                                    C389.242,296.928,389.417,301.211,386.88,303.947z'
                                />
                            </g>
                        </svg>
                        <span className='ml-4 text-gray-800'>Report a bug</span>
                    </div>
                    <div className='flex text-lg text-indigo-500 py-4'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='28'
                            height='28'
                            fill='currentColor'
                            viewBox='0 0 334.5 334.5'>
                            <path
                                d='M332.797,13.699c-1.489-1.306-3.608-1.609-5.404-0.776L2.893,163.695c-1.747,0.812-2.872,2.555-2.893,4.481
                                s1.067,3.693,2.797,4.542l91.833,45.068c1.684,0.827,3.692,0.64,5.196-0.484l89.287-66.734l-70.094,72.1
                                c-1,1.029-1.51,2.438-1.4,3.868l6.979,90.889c0.155,2.014,1.505,3.736,3.424,4.367c0.513,0.168,1.04,0.25,1.561,0.25
                                c1.429,0,2.819-0.613,3.786-1.733l48.742-56.482l60.255,28.79c1.308,0.625,2.822,0.651,4.151,0.073
                                c1.329-0.579,2.341-1.705,2.775-3.087L334.27,18.956C334.864,17.066,334.285,15.005,332.797,13.699z'
                            />
                        </svg>
                        <span className='ml-4 text-gray-800 '>Email us at codegrow@gmail.com</span>
                    </div>
                </div>

                <ContactCard
                    firstName={firstName}
                    lastName={lastName}
                    email={email}
                    country={country}
                    phone={phone}
                    company={company}
                    message={message}
                    setFirstName={setFirstName}
                    setLastName={setLastName}
                    setEmail={setEmail}
                    setCountry={setCountry}
                    setPhone={setPhone}
                    setCompany={setCompany}
                    setMessage={setMessage}
                    onSubmit={onSubmit}
                    submitting={submitting}
                    className='bg-white mt-12 rounded'
                />
            </div>
        </div>
    );
};
