import React from 'react';
import { render, screen } from '@testing-library/react';
import RoomCard from './RoomCard';
import { BrowserRouter as Router } from 'react-router-dom';

const renderWithRouter = (component: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined) => {
    return {
        ...render(
            <Router>
                {component}
            </Router>
        )
    }
}

describe('renders roomCard', () => {
    test('render a room', () => {
        const { container, getByTestId } = renderWithRouter(<RoomCard name={'Room1'} roomId={'1'} pricePerNight={5} />);
        // eslint-disable-next-line testing-library/prefer-screen-queries
        const link = getByTestId('room-link');

        expect(container.innerHTML).toMatch('Room1');
        expect(link).toContainElement(link);
    });
});
