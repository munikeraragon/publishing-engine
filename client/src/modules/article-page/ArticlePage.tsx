export const ArticlePage: React.FC = () => {
    return (
        <div className='min-h-full bg-white pt-24 md:pt-20 pb-8'>
            <div className='max-w-3xl bg-white m-auto'>
                {/* Article Header  */}
                <div className='my-8'>
                    <h1 className='text-3xl tracking-tight font-bold text-gray-800 break-words'>
                        Https security into your full-stack using
                        Docker+LetsEncript+Nginx+React+Express
                    </h1>
                </div>

                {/* Article Subheader  */}
                <div className='flex flex-col md:flex-row items-start justify-between md:items-center mt-2 mb-8 max-w-4xl mx-auto'>
                    <div className='flex items-center'>
                        <img
                            className='w-10 h-10 rounded-full mx-auto'
                            src='https://marcofranssen.nl/_next/image?url=%2Fimages%2Fprofile.jpg&w=64&q=75'
                            alt=''
                        />
                        <p className='text-md text-gray-700 ml-2'>Muniker Aragon / May 25, 2020</p>
                    </div>
                    <p className='text-md text-gray-700 ml-2'>4 min read ・ 1882 words</p>
                </div>

                <img
                    className='object-cover w-full block bg-cover bg-no-repeat bg-center rounded-md'
                    src='https://www.educative.io/cdn-cgi/image/f=auto,fit=cover,w=620/v2api/collection/4581872065576960/4866501796429824/image/6233768386887680'
                />

                {/* Content */}
                <p className='py-4 text-xl'>
                    In this blogpost I want to show you how you can easily get your React SPA app
                    with clientside router work properly with your Nginx setup. I will also show you
                    how to serve your React App over HTTP/2 and how you can leverage from http2
                    server pushes. To do so I will show you how to do that with the Nginx Docker
                    image.
                </p>
                <p className='py-4 text-xl'>
                    When running your webapp using the development server you will in general not
                    face any issues, however when running the static build on a production server
                    you will most likely face some issues. E.g. If you use React Router with a route
                    for /todo/42 your webserver will be looking for a file called /build/todo/42
                    which can't be found. Therefore we will need to direct our webserver to the
                    index.html.
                </p>
                <p className='py-4 text-xl'>
                    When using Nginx Docker image with the default configuration you will figure
                    that you will get 404 responses as soon you reach a page navigated by the
                    clientside React router. We will explore further on how to resolve that and how
                    to add some performance tuning as well.
                </p>

                <p className='py-4 text-xl'>
                    When using Nginx Docker image with the default configuration you will figure
                    that you will get 404 responses as soon you reach a page navigated by the
                    clientside React router. We will explore further on how to resolve that and how
                    to add some performance tuning as well.
                </p>

                <p className='py-4 text-xl'>
                    When using Nginx Docker image with the default configuration you will figure
                    that you will get 404 responses as soon you reach a page navigated by the
                    clientside React router. We will explore further on how to resolve that and how
                    to add some performance tuning as well.
                </p>

                <p className='py-4 text-xl'>
                    When using Nginx Docker image with the default configuration you will figure
                    that you will get 404 responses as soon you reach a page navigated by the
                    clientside React router. We will explore further on how to resolve that and how
                    to add some performance tuning as well.
                </p>

                <p className='py-4 text-xl'>
                    When using Nginx Docker image with the default configuration you will figure
                    that you will get 404 responses as soon you reach a page navigated by the
                    clientside React router. We will explore further on how to resolve that and how
                    to add some performance tuning as well.
                </p>

                <pre className='language-bash'>
                    <code className='language-bash'>
                        <span className='token comment'># using yarn</span>
                    </code>
                </pre>
            </div>
        </div>
    );
};
