import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../redux/app';
import { RootReducer } from '../redux/store';
import './Menu.css';

function Menu() {
  const { menu } = useSelector<RootReducer, AppState>((state) => state.app);

  return (
    <div className="Menu">
      {menu.map((m, index) => (
        <a className="Item" href={`/${m}`}>
          {m}
          {index !== menu.length - 1
            ? ' | '
            : ''}
          &nbsp;
        </a>
      ))}
    </div>
  );
}

export default Menu;
