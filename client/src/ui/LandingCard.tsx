import React from 'react';
import Link from 'next/link';
import Typist from 'react-typist';

export interface LandingCardProps {
    className?: string;
    primaryHeader: string;
    secondaryHeader?: string;
    description?: string;
    linkLabel1?: string;
    linkLabel2?: string;
    linkHref1?: string;
    linkHref2?: string;
}

export const LandingCard: React.FC<LandingCardProps> = ({ className = '', ...props }) => {
    return (
        <div className={`flex flex-col justify-center mx-4 ${className}`}>
            <div className='sm:text-center lg:text-left'>
                <p className='text-3xl md:text-4xl tracking-tight font-bold text-white'>
                    {props.primaryHeader}
                </p>

                {props.secondaryHeader && (
                    <h1 className='text-4xl font-bold text-indigo-600'>{props.secondaryHeader}</h1>
                )}

                {props.description && (
                    <Typist
                        cursor={{ blink: true }}
                        className='mt-3 whitespace-pre-wrap sm:mt-5 text-indigo-200 
                        sm:max-w-xl sm:mx-auto md:mt-5 text:lg md:text-xl lg:mx-0'>
                        {props.description} 🚀
                    </Typist>
                )}

                <div className='mt-10 sm:flex sm:justify-center lg:justify-start'>
                    {props.linkLabel1 && (
                        <div className='z-10 mt-3 sm:mt-0'>
                            <Link href={props.linkHref1 || 'link-2'}>
                                <a
                                    className='w-full flex items-center justify-center px-8 py-3
                                    border border-transparent font-semibold rounded-md text-white
                                    bg-indigo-500 hover:bg-indigo-600 hover:bg-blue-200
                                    md:py-1.5 md:text-md md:px-6'>
                                    {props.linkLabel1}
                                </a>
                            </Link>
                        </div>
                    )}
                    {props.linkLabel2 && (
                        <div className='z-10 rounded-md shadow'>
                            <Link href={props.linkHref2 || ''}>
                                <a
                                    className='w-full flex items-center justify-center px-8 py-2 border
                                    border-transparent text-base font-medium rounded-md text-white
                                    bg-indigo-600 hover:bg-indigo-700  md:py-2 md:text-lg md:px-10'>
                                    {props.linkLabel2}
                                </a>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
