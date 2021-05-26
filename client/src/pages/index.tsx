import { ContactPage } from '../modules/contact-page/ContactPage';
import { LandingPage } from '../modules/landing-page/LandinPage';
import { ArticlesPage } from '../modules/articles-page/ArticlesPage';

export default function App() {
    return (
        <>
            <LandingPage />
            <ArticlesPage />
            <ContactPage />
        </>
    );
}
