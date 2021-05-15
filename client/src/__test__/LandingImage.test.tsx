import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { LandingImage, LandingImageProps } from '../ui/LandingImage';

const renderLandingImage = (props: Partial<LandingImageProps> = {}) => {
    const defaultProps: LandingImageProps = {
        src: 'https://ethereum.org/static/5d3af9eb308978e7a078bf51022d8a5c/0dadc/merge.png',
        alt: 'Image of a spaceship'
    };
    return render(<LandingImage {...defaultProps} {...props} />);
};

describe('<LandingImage />', () => {
    afterEach(cleanup);

    test('renders without crashing', () => {
        renderLandingImage();
    });

    test('renders correct image', () => {
        const { getByRole } = renderLandingImage();
        expect(getByRole('img')).toHaveAttribute(
            'src',
            'https://ethereum.org/static/5d3af9eb308978e7a078bf51022d8a5c/0dadc/merge.png'
        );
        expect(getByRole('img')).toHaveAttribute('alt', 'Image of a spaceship');
    });

    test('matches Progress card snapshot', () => {
        const tree = renderer
            .create(
                <LandingImage
                    src='https://ethereum.org/static/5d3af9eb308978e7a078bf51022d8a5c/0dadc/merge.png'
                    alt='Image of a spaceship'
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
