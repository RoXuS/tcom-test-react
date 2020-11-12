import { getLive, getItem } from '../api/live';
import { ItemResponse, Live } from '../types/live';
import {
  setNews, LiveState, setCurrentLive, setTops,
} from './live';
import { store } from './store';

export const getLiveFromServer = async (type: Live) => {
  const lives = await getLive(type);
  switch (type) {
    case 'new':
      store.dispatch(setNews(lives));
      break;
    case 'top':
      store.dispatch(setTops(lives));
      break;
    default:
      break;
  }
};

export const getMappedLive = async (page: LiveState['page'], size: LiveState['size'], lives: LiveState['tops'] | LiveState['news']) => {
  const newLives = lives.slice(
    page * size,
    page * size + size,
  );
  const mappedLives = await Promise.all(
    newLives.map((live) => {
      const item = getItem(live);
      return item;
    }),
  );
  store.dispatch(setCurrentLive(mappedLives as Array<ItemResponse>));
};
