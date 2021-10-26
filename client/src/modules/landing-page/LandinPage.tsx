import { LandingCard } from '../../ui/LandingCard';
import { LandingImage } from '../../ui/LandingImage';

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
        <div className='bg-gray-800 py-20'>
            <div className='h-full max-w-7xl m-auto grid grid-cols-1 lg:grid-cols-2 gap-4 pt-16 pb-8'>
                <LandingCard
                    primaryHeader='Welcome to Codegrow!'
                    description={`The ultimate resource to learn about tech`}
                    linkLabel1='Read Posts'
                    linkHref1='#posts'
                    className='text-white'
                />

                <LandingImage
                    src='https://ethereum.org/static/5d3af9eb308978e7a078bf51022d8a5c/0dadc/merge.png'
                    alt='Image of a spaceship'
                />
            </div>
        </div>
    );
};
