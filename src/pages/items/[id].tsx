import type { NextPage } from 'next';
import Head from 'next/head';

import { Layout } from 'components/Layout';
import { Wrapper } from 'components/Wrapper';
import { Breadcrumb } from 'components/breadcrumb/Breadcrumb';
import { BreadcrumbItem } from 'components/breadcrumb/BreadcrumbItem';
import { ItemDetail } from 'types/detail-item';
import { ItemDescription } from 'types/description-item';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { ENVIRONMENTS } from 'environments/environments';
import Image from 'next/image';
import { Button } from 'components/Button';
import { ItemDataSource } from 'data/datasources/detail.datasource';
import { ErrorItem } from 'types/error-item';

export type Props = {
  item: ItemDetail;
  itemDescription: ItemDescription;
  error: boolean;
};

const DetailItem: NextPage<Props> = ({ item, itemDescription, error }) => {
  return (
    <>
      {error ? (
        <div className="text-center mt-8 text-grey-ml font-bold">
          Producto no encontrado
        </div>
      ) : (
        <>
          <Head>
            <title>{item.title} | MercadoLibre</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Layout>
            <Breadcrumb>
              <BreadcrumbItem href="/">Inicio</BreadcrumbItem>
              <BreadcrumbItem href="/">{item.title}</BreadcrumbItem>
            </Breadcrumb>
            <Wrapper>
              <div className="bg-white-ml w-full mb-4">
                <div className="grid grid-cols-8 w-full gap-8">
                  <div className="col-span-6">
                    <Image
                      src={item.pictures[0].url}
                      width={680}
                      height={500}
                      alt={item.title}
                      layout="responsive"
                      objectFit="contain"
                      className="cursor-zoom-in"
                    />
                  </div>
                  <div className="col-span-2 p-8">
                    <span className="text-sm text-grey-ml">
                      {item.condition} -{' '}
                      {item.sold_quantity > 0
                        ? `${item.sold_quantity} vendidos`
                        : ''}
                    </span>
                    <h1 className="text-2xl font-bold">{item.title}</h1>
                    <div className="my-8 text-5xl font-light">
                      $ {item.price}
                    </div>
                    <Button>Comprar</Button>
                  </div>
                  <div className="col-span-6 pl-8 pb-8">
                    <h2 className="text-3xl">Descripción del producto</h2>
                    <p className="mt-8 text-grey-ml text-base">
                      {itemDescription.plain_text}
                    </p>
                  </div>
                </div>
              </div>
            </Wrapper>
          </Layout>
        </>
      )}
    </>
  );
};

export default DetailItem;

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const {
    query: { id },
  } = ctx;
  const itemDataSource = new ItemDataSource();

  const item = await itemDataSource.getItem(id as string);
  const itemDescription = await itemDataSource.getItemDescription(id as string);

  return {
    props: {
      item,
      itemDescription,
      error: (item as ErrorItem).error ? true : false,
    },
  };
};
