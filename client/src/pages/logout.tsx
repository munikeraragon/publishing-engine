import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useTokenStore } from '../modules/auth/useTokenStore';

interface logoutProps {}

export const Logout: React.FC<logoutProps> = ({}) => {
    const { push } = useRouter();
    const [hasTokens, setTokens] = useTokenStore((s) => [
        !!(s.accessToken && s.refreshToken),
        s.setTokens
    ]);

    useEffect(() => {
        if (!hasTokens) {
            console.log('sending to main');
            push('/');
        }
    }, [hasTokens]);

    return (
        <button
            onClick={() => setTokens({ accessToken: '', refreshToken: '' })}
            className='flex flex-col items-start w-full text-md
            text-indigo-600 hover:bg-gray-50 px-4 py-2 rounded-md'>
            Sing Out
        </button>
    );
};

export default Logout;
