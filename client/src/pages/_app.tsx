import { useEffect } from 'react';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apollo';
import AOS from 'aos';

import 'aos/dist/aos.css';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: any) {
    const apolloClient = useApollo(pageProps.initialApolloState);

    const Layout = Component.layout || (({ children }: any) => <>{children}</>);

    useEffect(() => {
        AOS.init({
            once: true,
            disable: 'phone',
            duration: 600,
            easing: 'ease-out-sine'
        });
    });

    return (
        <ApolloProvider client={apolloClient}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ApolloProvider>
    );
}

export default MyApp;
