import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './App';

describe('renders app', () => {
  const initialState = {userLogin: {
    userInfo: JSON.parse(localStorage.getItem("userInfo")!)
  }, roomsFetch: {
    loading: true
  }};

  const mockStore = configureStore();
  let store;

  jest.mock('react-redux', () => ({
    useSelector: jest.fn(fn => fn()),
  }));

  test('Shows "<App>"', () => {
    store = mockStore(initialState);

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const linkElement = screen.getByText(/HOTEL/i);
    expect(linkElement).toBeInTheDocument();

  });
});
