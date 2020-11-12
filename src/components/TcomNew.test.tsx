import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import TcomNew from './TcomNew';
import { store } from '../redux/store';

test('TcomNew render', async () => {
  render(<Provider store={store}><TcomNew /></Provider>);

  const moreElement = screen.getByText(/More/);
  expect(moreElement).toBeInTheDocument();
});
