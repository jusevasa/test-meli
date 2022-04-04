import { FC } from 'react';
import { IconMeli } from './icons/Meli';
import { InputSearch } from './InputSearch';
import Link from 'next/link';

export const Nav: FC = () => {
  return (
    <nav className="bg-yellow-ml w-full px-2" data-testid="nav-bar">
      <div className="container px-4 flex justify-center items-center py-2 lg:mx-auto">
        <Link href="/" passHref>
          <a className="flex items-center">
            <IconMeli />
          </a>
        </Link>
        <InputSearch />
      </div>
    </nav>
  );
};
