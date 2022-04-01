import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mercado Libre Colombia - Envíos Gratis en el día</title>
        <meta
          name="description"
          content="Compre productos con Envío Gratis en el día en Mercado Libre Colombia. Encuentre miles de marcas y productos a precios increíbles."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </main>
    </>
  );
};

export default Home;
