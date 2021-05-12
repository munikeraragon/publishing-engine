import { TextInput } from "../../ui/TextInput";

export const ContactPage = () => {
    return (
        <div id="contact" className="pt-16 pb-4">
            <div className="max-w-7xl m-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                    <div className="pb-8">
                        <h1 className="text-3xl tracking-tight font-semibold text-gray-800">
                            Get in touch
                        </h1>
                    </div>

                    <p className="text-lg font-medium text-gray-500">
                        We can help you fullfill all of your consolting and project task. We can
                        help you decipher the most complex data obstacles into clean models and
                        visualizations that provide insigh to your bussiness and your company.
                    </p>

                    <div className="flex text-md font-medium text-gray-500 py-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                        </svg>
                        <span>+1 (360) 980-9852</span>
                    </div>

                    <div className="flex text-md font-medium text-gray-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                        </svg>
                        <span>munikeraragon@gmail.com</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                        <TextInput label="First Name" name="First Name" />
                    </div>

                    <div>
                        <TextInput label="Last Name" name="Last Name" />
                    </div>

                    <div className="col-span-2">
                        <TextInput label="Email" name="Email" />
                    </div>

                    <div className="col-span-2">
                        <TextInput label="Company" name="Company" />
                    </div>

                    <div className="col-span-2">
                        <TextInput label="Phone" name="Phone" />
                    </div>

                    <div className="col-span-2">
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-700"
                        >
                            how can we help you?
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <span className="text-gray-500 sm:text-sm"></span>
                            </div>

                            <textarea
                                id="message"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                            />
                        </div>
                    </div>

                    <div className="m-auto col-span-2">
                        <span className="w-full flex items-center justify-center px-8 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700  md:py-2 md:text-lg md:px-10">
                            Submit
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
