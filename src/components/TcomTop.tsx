import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  LiveState, setPage,
} from '../redux/live';
import { RootReducer } from '../redux/store';
import './TcomTop.css';
import TcomItem from './TcomItem';
import { getLiveFromServer, getMappedLive } from '../redux/utils';

function TcomTop() {
  const {
    tops,
    size,
    page,
    currentLive,
  } = useSelector<RootReducer, LiveState>((state) => state.live);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPage(0));
  }, []);

  useEffect(() => {
    getLiveFromServer('top');
  }, [page, size]);

  useEffect(() => {
    getMappedLive(page, size, tops);
  }, [tops]);

  const tapOnMore = () => {
    dispatch(setPage(page + 1));
  };

  return (
    <div className="LiveItems">
      {currentLive.map((item, index) => (
        <TcomItem
          key={item.id}
          index={index + 1 + page * size}
          item={item}
        />
      ))}
      <div className="More" onClick={tapOnMore}>More</div>
    </div>
  );
}

export default TcomTop;
