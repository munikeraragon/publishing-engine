import { FC, useState, useEffect } from 'react';
import throttle from 'lodash.throttle';

const NavbarRoot: FC = ({ children }) => {
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = throttle(() => {
            const offset = 0;
            const { scrollTop } = document.documentElement;
            const scrolled = scrollTop > offset;

            if (hasScrolled !== scrolled) {
                setHasScrolled(scrolled);
            }
        }, 200);

        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [hasScrolled]);

    return (
        <div
            className={`transition-all duration-150' ${
                hasScrolled ? 'shadow-magical border-b border-gray-200' : ''
            }`}>
            {children}
        </div>
    );
};

export default NavbarRoot;
