import React from "react";
import Link from "next/link";

export const LandingCard = () => {
    return (
        <div className="flex flex-col justify-center mx-4">
            <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-bold text-gray-700">Welcome!</h1>

                <h1 className="text-4xl font-bold text-indigo-600">Let's Start Coding</h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
                    commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                        <Link href="#projects">
                            <span className="w-full flex items-center justify-center px-8 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700  md:py-2 md:text-lg md:px-10">
                                See Projects
                            </span>
                        </Link>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                        <Link href="/articles">
                            <span className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 hover:bg-blue-200 md:py-2 md:text-lg md:px-10">
                                Read Articles
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};