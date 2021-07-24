import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useTokenStore } from './useTokenStore';

export const useVerifyLoggedIn = () => {
    const { replace, asPath } = useRouter();
    const hasTokens = useTokenStore((s) => !!(s.accessToken && s.refreshToken));

    useEffect(() => {
        if (!hasTokens) {
            console.log('sending to as path');
            replace(`/?next=${asPath}`);
        }
    }, [hasTokens, asPath, replace]);

    return hasTokens;
};
