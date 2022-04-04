import Image from 'next/image';
import { FC } from 'react';

type Props = {
  width?: number;
  height?: number;
};

export const IconMeli: FC<Props> = ({ width = 60, height = 40 }) => (
  <Image src="/assets/logo_meli.png" alt="icon-meli" width={width} height={height} />
);

