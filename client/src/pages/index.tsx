import { ContactPage } from '../modules/contact-page/ContactPage';
import { LandingPage } from '../modules/landing-page/LandinPage';
import { ArticlesPage } from '../modules/articles-page/ArticlesPage';

const App: React.FC = () => {
    return (
        <>
            <LandingPage />
            <ArticlesPage />
            <ContactPage />
        </>
    );
};

export default App;
