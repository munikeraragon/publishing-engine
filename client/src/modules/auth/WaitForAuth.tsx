import { useVerifyLoggedIn } from './useVerifyLogin';

export const WaitForAuth: React.FC = ({ children }) => {
    if (!useVerifyLoggedIn()) {
        return null;
    }

    return <>{children}</>;
};
