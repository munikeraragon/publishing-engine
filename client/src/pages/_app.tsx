import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apollo';
import { Navbar } from '../ui/Navbar/Navbar';
import AOS from 'aos';

import 'aos/dist/aos.css';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    const apolloClient = useApollo(pageProps.initialApolloState);

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
            <Navbar />
            <Component {...pageProps} />
        </ApolloProvider>
    );
}

export default MyApp;
