import Image from 'next/image';
import { FC } from 'react';

type Props = {
  width?: number;
  height?: number;
};

export const IconShipping: FC<Props> = ({ width = 15, height = 15 }) => (
  <Image
    src="/assets/ic_shipping.png"
    alt="icon-shipping"
    width={width}
    height={height}
  />
);
