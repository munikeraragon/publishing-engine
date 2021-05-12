import { ContactPage } from "../modules/contact-page/ContactPage";
import { LandingPage } from "../modules/landing-page/LandinPage";
import { ProjectsPage } from "../modules/projects-page/ProjectsPage";

export default function App() {
    return (
        <>
            <LandingPage />
            <ProjectsPage />
            <ContactPage />
        </>
    );
}
