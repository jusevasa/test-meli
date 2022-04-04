import { FC } from 'react';
import Image from 'next/image';

import { IconShipping } from 'components/icons/Shipping';
import { ResultItem } from '../../types/result-item';

export type Props = {
  item: ResultItem;
  handleClick: (item: ResultItem) => void;
};

export const ItemSearch: FC<Props> = ({ item, handleClick }) => {
  return (
    <li
      className="bg-white-ml flex w-full p-4 cursor-pointer relative after:absolute after:bottom-0 after:left-1/2 after:content-[''] after:border-b after:border-b-grey-high-ml after:last:border-b-0 after:w-11/12 after:-translate-x-1/2"
      onClick={() => handleClick(item)}
    >
      <div className="grid grid-cols-5 w-full gap-4">
        <div className="p-4 col-span-3">
          <div className="flex flex-row gap-4">
            <Image
              src={item.thumbnail}
              alt={item.title}
              width={180}
              height={180}
              className="object-contain rounded"
            />
            <div className="flex flex-col w-full">
              <div className="flex justify-start items-center">
                $ {item.price}
                {item.accepts_mercadopago && (
                  <span className="ml-1 flex justify-center items-center">
                    <IconShipping />
                  </span>
                )}
              </div>
              <p className="text-lg mt-8">{item.title}</p>
            </div>
          </div>
        </div>
        <div className="col-span-2 text-xs text-grey-ml mt-5">
          {item.seller_address.state.name}
        </div>
      </div>
    </li>
  );
};
