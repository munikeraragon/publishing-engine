import { useMediaQuery } from 'react-responsive';

export const useScreenType = (): string => {
    const is2Xl = useMediaQuery({ minWidth: 1536 });
    const isXl = useMediaQuery({ minWidth: 1280 });
    const isLg = useMediaQuery({ minWidth: 1024 });
    const isMd = useMediaQuery({ minWidth: 768 });
    const isSm = useMediaQuery({ minWidth: 640 });

    if (is2Xl) {
        return '2xl';
    }
    if (isXl) {
        return 'xl';
    }
    if (isLg) {
        return 'lg';
    }
    if (isMd) {
        return 'md';
    }
    if (isSm) {
        return 'sm';
    }

    return 'xs';
};
