import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import TcomTop from './TcomTop';
import { store } from '../redux/store';

test('TcomTop render', async () => {
  render(<Provider store={store}><TcomTop /></Provider>);

  const moreElement = screen.getByText(/More/);
  expect(moreElement).toBeInTheDocument();
});
