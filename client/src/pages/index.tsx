import { LandingContactPage } from '../modules/landing-contact-page/LandingContactPage';
import { LandingPage } from '../modules/landing-page/LandinPage';
import { LandingPostsPage } from '../modules/landing-posts-page/LandingPostsPage';
import { Navbar } from '../ui/navbar/Navbar';
import { Header } from '../ui/new-header/Header';

const App: React.FC = () => {
    return (
        <>
            <Navbar />
            <LandingPage />
            <LandingPostsPage />
            <LandingContactPage />
        </>
    );
};

export default App;
