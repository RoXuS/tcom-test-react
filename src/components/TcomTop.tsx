import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getItem, getLive } from '../api/live';
import {
  LiveState, setCurrentLive, setPage, setTops,
} from '../redux/live';
import { RootReducer, store } from '../redux/store';
import { ItemResponse } from '../types/live';
import './TcomTop.css';
import TcomItem from './TcomItem';

const getLiveFromServer = async () => {
  const topsFromApi = await getLive('top');
  store.dispatch(setTops(topsFromApi));
};

const getMappedLive = async (page: LiveState['page'], size: LiveState['size'], tops: LiveState['tops']) => {
  const newTops = tops.slice(
    page * size,
    page * size + size,
  );
  const mappedTops = await Promise.all(
    newTops.map((top) => {
      const item = getItem(top);
      return item;
    }),
  );
  store.dispatch(setCurrentLive(mappedTops as Array<ItemResponse>));
};

function TcomTop() {
  const {
    tops,
    size,
    page,
    currentLive,
  } = useSelector<RootReducer, LiveState>((state) => state.live);

  const dispatch = useDispatch();

  useEffect(() => {
    getLiveFromServer();
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
