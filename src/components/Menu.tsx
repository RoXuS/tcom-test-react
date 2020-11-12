import React from 'react';
import { useSelector } from 'react-redux';
import {
  Link,
} from 'react-router-dom';
import { AppState } from '../redux/app';
import { RootReducer } from '../redux/store';
import './Menu.css';

function Menu() {
  const { menu } = useSelector<RootReducer, AppState>((state) => state.app);

  return (
    <div className="Menu">
      {menu.map((m, index) => (
        <Link to={`/${m}`} key={m} className="Item" href={`/${m}`}>
          {m}
          {index !== menu.length - 1
            ? ' | '
            : ''}
          &nbsp;
        </Link>
      ))}
    </div>
  );
}

export default Menu;
