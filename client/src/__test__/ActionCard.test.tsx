import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { ActionCard, ActionCardProps } from '../ui/action-card/ActionCard';

const renderActionCard = (props: Partial<ActionCardProps> = {}) => {
    const defaultProps: ActionCardProps = {
        src: 'https://ethereum.org/static/a44134e541c72364beb121234ab5864e/19ca5/infrastructure_transparent.png',
        title: 'Title',
        description: 'This a description',
        completed: 10
    };
    return render(<ActionCard {...defaultProps} {...props} />);
};

describe('<ActionCard />', () => {
    afterEach(cleanup);

    test('renders without crashing', () => {
        renderActionCard();
    });

    test('renders the correct content', () => {
        const { getByText } = renderActionCard();
        getByText('Title');
        getByText('This a description');
    });

    test('contains correct links', () => {
        const { getByTestId } = renderActionCard();
        expect(getByTestId('github-link')).toHaveAttribute(
            'href',
            'https://github.com/munikeraragon/json-compare'
        );
        expect(getByTestId('live-link')).toHaveAttribute(
            'href',
            'https://munikeraragon.github.io/json-compare/'
        );
    });

    test('matches Progress card snapshot', () => {
        const tree = renderer
            .create(
                <ActionCard completed={10} src='' title='Title' description='This a description' />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
