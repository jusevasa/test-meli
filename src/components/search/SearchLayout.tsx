import { FC } from 'react';
import { ResultItem } from '../../types/result-item';
import Router from 'next/router';

import { ItemSearch } from './ItemSearch';

export type Props = {
  items?: ResultItem[];
};

export const SearchLayout: FC<Props> = ({ items }) => {
  const handleClick = (item: ResultItem): void => {
    Router.push({
      pathname: '/items/[id]',
      query: { id: item.id },
    });
  };

  return (
    <ul className="w-full">
      {items?.map((item: ResultItem) => (
        <ItemSearch
          key={item.id}
          item={item}
          handleClick={(item) => {
            handleClick(item);
          }}
        />
      ))}
      {items?.length === 0 && (
        <p className="text-grey-ml text-center text-base">Sin resultados</p>
      )}
    </ul>
  );
};
