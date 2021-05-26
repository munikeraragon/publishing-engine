import React from 'react';
import Link from 'next/link';

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
                <h1 className='text-4xl tracking-tight font-bold text-gray-700'>
                    {props.primaryHeader}
                </h1>

                {props.secondaryHeader && (
                    <h1 className='text-4xl font-bold text-indigo-600'>{props.secondaryHeader}</h1>
                )}

                {props.description && (
                    <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>
                        {props.description}
                    </p>
                )}
                <div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
                    {props.linkLabel1 && (
                        <div className='z-10 rounded-md shadow'>
                            <Link href={props.linkHref1 || ''}>
                                <span className='w-full flex items-center justify-center px-8 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700  md:py-2 md:text-lg md:px-10'>
                                    {props.linkLabel1}
                                </span>
                            </Link>
                        </div>
                    )}
                    {props.linkLabel2 && (
                        <div className='z-10 mt-3 sm:mt-0 sm:ml-3'>
                            <Link href={props.linkHref2 || 'link-2'}>
                                <span className=' w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 hover:bg-blue-200 md:py-2 md:text-lg md:px-10'>
                                {props.linkLabel2}
                                </span>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
