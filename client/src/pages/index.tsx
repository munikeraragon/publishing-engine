import { LandingContactPage } from '../modules/landing-contact-page/LandingContactPage';
import { LandingPage } from '../modules/landing-page/LandinPage';
import { LandingPostsPage } from '../modules/landing-posts-page/LandingPostsPage';
import { Navbar } from '../ui/navbar/Navbar';

const App: React.FC = () => {
    return (
        <>
            <Navbar className={'fixed'} />
            <LandingPage />
            <LandingPostsPage />
            <LandingContactPage />
        </>
    );
};

export default App;
