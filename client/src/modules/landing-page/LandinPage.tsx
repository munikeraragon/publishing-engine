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

export const LandingPage = () => {
    return (
        <div className='h-full max-w-7xl m-auto grid grid-cols-1 lg:grid-cols-2 gap-4 pt-16 pb-8'>
            <LandingCard
                primaryHeader='Welcome!'
                secondaryHeader="Let's Start Coding"
                description='Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
                cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.'
                linkLabel1='See Projects'
                linkHref1='#projects'
                linkLabel2='Read Articles'
                linkHref2='/articles'
            />
            <LandingImage
                src='https://ethereum.org/static/5d3af9eb308978e7a078bf51022d8a5c/0dadc/merge.png'
                alt='Image of a spaceship'
            />
        </div>
    );
};
