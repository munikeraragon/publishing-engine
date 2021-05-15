import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { LandingCard, LandingCardProps } from '../ui/LandingCard';

const renderLandingCard = (props: Partial<LandingCardProps> = {}) => {
    const defaultProps: LandingCardProps = {
        primaryHeader: 'Welcome!',
        secondaryHeader: "Let's Start Coding",
        description: 'This is a description',
        linkLabel1: 'See Projects',
        linkHref1: '#projects',
        linkLabel2: 'Read Articles',
        linkHref2: '/articles'
    };
    return render(<LandingCard {...defaultProps} {...props} />);
};

describe('<LandingCard />', () => {
    afterEach(cleanup);

    test('renders without crashing', () => {
        renderLandingCard();
    });

    test('renders the correct content', () => {
        const { getByText } = renderLandingCard();
        getByText('Welcome!');
        getByText("Let's Start Coding");
        getByText('This is a description');
    });

    test('matches Progress card snapshot', () => {
        const tree = renderer
            .create(
                <LandingCard
                    primaryHeader='Welcome!'
                    secondaryHeader="Let's Start Coding"
                    description='This is a description'
                    linkLabel1='See Projects'
                    linkHref1='#projects'
                    linkLabel2='Read Articles'
                    linkHref2='/articles'
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
