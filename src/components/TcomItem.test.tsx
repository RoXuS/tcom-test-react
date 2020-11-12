import React from 'react';
import { render, screen } from '@testing-library/react';
import TcomItem from './TcomItem';

test('renders learn react link', () => {
  const item = {
    by: 'runesoerensen',
    descendants: 806,
    id: 25049079,
    kids: [25051147],
    score: 694,
    time: 1605032019,
    title:
        'Apple unveils M1, its first system-on-a-chip for portable Mac computers',
    type: 'story',
    url:
        'https://9to5mac.com/2020/11/10/apple-unveils-m1-its-first-system-on-a-chip-for-portable-mac-computers/',
  };
  render(<TcomItem index={1} item={item} />);
  const linkElement = screen.getByText(/694 points by runesoerensen about \d+ hours | 806/);
  expect(linkElement).toBeInTheDocument();

  const rankElement = screen.getByText(/1\./);
  expect(rankElement).toBeInTheDocument();

  const byElement = screen.getByText(/\(9to5mac\.com\)/);
  expect(byElement).toBeInTheDocument();

  const aElement = screen.getByText(/Apple unveils M1, its first system-on-a-chip for portable Mac computers/);
  expect(aElement).toBeInTheDocument();
  expect(aElement).toHaveAttribute('href', 'https://9to5mac.com/2020/11/10/apple-unveils-m1-its-first-system-on-a-chip-for-portable-mac-computers/');
});
