import { SinglePublicLayout } from '../layouts/single-public';
import { LandingContactPage } from '../modules/landing-contact-page/LandingContactPage';
import { LandingPage } from '../modules/landing-page/LandinPage';
import { LandingPostsPage } from '../modules/landing-posts-page/LandingPostsPage';

const App: React.FC = () => {
    return (
        <>
            <LandingPage />
            <LandingPostsPage />
            <LandingContactPage />
        </>
    );
};

(App as any).layout = SinglePublicLayout;

export default App;
