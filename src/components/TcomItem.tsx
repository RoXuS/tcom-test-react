import React from 'react';

import parse from 'date-fns/parse';
import distanceInWordsToNow from 'date-fns/formatDistanceToNow';
import './TcomItem.css';
import { ItemResponse } from '../types/live';

function TcomItem({ index, item }:
{index: number; item: ItemResponse}) {
  const getHost = (url: string) => {
    try {
      const parsedUrl = new URL(url);
      return `(${parsedUrl.hostname.replace('www', '')})`;
    } catch (e) {
      return '';
    }
  };

  const getTimeSpent = (timestamp: number) => {
    if (timestamp) {
      const date = parse(timestamp.toString(), 't', new Date());
      return distanceInWordsToNow(date);
    }
    return '';
  };

  return (
    <div className="Wrapper">
      <div className="LineOne">
        <div>
          {index}
          .
        </div>
        <div className="Votearrow" />
        <a href={item.url}>
          {item.title}
        </a>
        <div className="By">
          &nbsp;$
          {getHost(item.url)}
        </div>
      </div>
      <div className="LineTwo">
        {item.score}
        {' '}
        points by $
        {item.by}
        {getTimeSpent(item.time)}
        {' '}
        | $
        {item.descendants}
      </div>
    </div>
  );
}

export default TcomItem;
