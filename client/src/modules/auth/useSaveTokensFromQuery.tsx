import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useTokenStore } from './useTokenStore';

export const useSaveTokensFromQuery = () => {
    const { query: params, push } = useRouter();
    const loginNextPathKey = '@dogehouse/login-next';

    useEffect(() => {
        if (typeof params.error === 'string' && params.error) {
            console.log(params.error);
        }
        if (
            typeof params.accessToken === 'string' &&
            typeof params.refreshToken === 'string' &&
            params.accessToken &&
            params.refreshToken
        ) {
            useTokenStore.getState().setTokens({
                accessToken: params.accessToken,
                refreshToken: params.refreshToken
            });
            let nextPath = '/dash/home';
            try {
                const possibleNextPath = localStorage.getItem(loginNextPathKey);
                if (possibleNextPath && possibleNextPath.startsWith('/')) {
                    nextPath = possibleNextPath;
                    localStorage.setItem(loginNextPathKey, '');
                }
            } catch {}
            // Push to next path after auto redirect to /dash (100 msecs is unoticeable)
            setTimeout(() => push(nextPath), 100);
        }
    }, [params, push]);
};
