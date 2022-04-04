import { FC, useState } from 'react';
import Router from 'next/router';

import IconSearch from './icons/Search';

export const InputSearch: FC = () => {
  const [search, setSearch] = useState('');

  const handleKeyInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSearch = (): void => {
    if (search.trim().length > 0) {
      Router.push({
        pathname: '/items',
        query: { q: search },
      });
    } else {
      Router.push({
        pathname: '/',
      });
    }
  };

  return (
    <div className="ml-3 w-full flex flex-row">
      <input
        className="bg-white focus:outline-none focus:shadow-outline border-gray-300 w-full rounded-sm py-1 px-4 block appearance-none leading-normal font-light h-10"
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyPress={handleKeyInput}
      />
      <span
        className="bg-grey-high-ml flex justify-center items-center cursor-pointer w-10 rounded-tr-sm rounded-br-sm"
        onClick={() => handleSearch()}
      >
        <IconSearch />
      </span>
    </div>
  );
};
