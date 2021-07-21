import { LandingCard } from '../../ui/LandingCard';
import { LandingImage } from '../../ui/LandingImage';
import { ReactParticles } from '../../ui/Particles';

export interface LandingCardProps {
    className?: string;
    primaryHeader: string;
    secondaryHeader?: string;
    description?: string;
    hrefLink1?: string;
    hrefLink2?: string;
}

export const LandingPage: React.FC = () => {
    return (
        <div className='h-full'>
            <div className='h-full max-w-7xl m-auto grid grid-cols-1 lg:grid-cols-2 gap-4 pt-16 pb-8'>
                <LandingCard
                    primaryHeader='Welcome to Codegrow!'
                    secondaryHeader='Start your coding journey'
                    description={`The ultimate resource to learn about tech.\nFind Opensource pojects and join their community.`}
                    linkLabel1='See Projects'
                    linkHref1='/dash/projects'
                    linkLabel2='Read Posts'
                    linkHref2='#posts'
                />
                <LandingImage
                    src='https://ethereum.org/static/5d3af9eb308978e7a078bf51022d8a5c/0dadc/merge.png'
                    alt='Image of a spaceship'
                />
            </div>
            <ReactParticles />
        </div>
    );
};
