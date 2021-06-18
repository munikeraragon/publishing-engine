import { useEffect, useState } from 'react';

const useServerAddress = () => {
    const [serverAddress, setServerAddress] = useState('');

    useEffect(() => {
        if (window.location.hostname === 'localhost') {
            setServerAddress('http://localhost:5000');
        } else {
            setServerAddress('https://codegrow.org:5000');
        }
    }, []);

    return serverAddress;
};

export default useServerAddress;
