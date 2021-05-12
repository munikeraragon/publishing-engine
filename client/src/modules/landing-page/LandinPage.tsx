import { LandingCard } from "../../ui/LandingCard";
import { LandingImage } from "../../ui/LandingImage";

export const LandingPage = () => {
    return (
        <div className="h-full max-w-7xl m-auto grid grid-cols-1 lg:grid-cols-2 gap-4 pt-16 pb-8">
            <LandingCard />
            <LandingImage />
        </div>
    );
};
