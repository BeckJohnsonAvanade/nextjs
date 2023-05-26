import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import Layout from '../../components/layout';

export default function FirstPost() {
     return (
   <Layout>
     <Head>
        <title>Page 2</title>
     
        <meta name="view-transition" content="same-origin" />
      </Head>
     
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}