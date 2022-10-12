import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import { Layout } from "components/Layout";
import { Wrapper } from "components/Wrapper";
import { SearchLayout } from "components/search/SearchLayout";
import { Breadcrumb } from "components/breadcrumb/Breadcrumb";
import { BreadcrumbItem } from "components/breadcrumb/BreadcrumbItem";
import { ResultDataSource } from "data/datasources/result.datasource";
import { ResultItem } from "types/result-item";
import { spliceArray } from "mappers/spliceArray.mapper";

export type Props = {
  items: ResultItem[];
};

const Results: NextPage<Props> = ({ items }) => {
  const router = useRouter();
  const { q } = router.query;

  return (
    <>
      <Head>
        <title>{q as string}- MercadoLibre📦</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content={q as string} />
      </Head>
      <Layout>
        {q && (
          <Breadcrumb>
            <BreadcrumbItem href='/'>Inicio</BreadcrumbItem>
            <BreadcrumbItem href='/'>{q as string}</BreadcrumbItem>
          </Breadcrumb>
        )}
        {items && (
          <Wrapper>
            <SearchLayout items={items} />
          </Wrapper>
        )}
      </Layout>
    </>
  );
};

export default Results;

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const { q } = ctx.query;

  const resultDataSource = new ResultDataSource();
  const data = await resultDataSource.getResults(q ? (q as string) : "");

  return {
    props: {
      items: spliceArray<ResultItem>(data.results),
    },
  };
};
