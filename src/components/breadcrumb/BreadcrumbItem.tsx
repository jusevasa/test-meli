import Link from 'next/link';
import { FC } from 'react';

export type Props = {
  children: React.ReactChild;
  href: string;
};

export const BreadcrumbItem: FC<Props> = ({ children, href, ...props }) => {
  return (
    <li {...props}>
      <Link href={href} passHref>
        <a>{children}</a>
      </Link>
    </li>
  );
};
