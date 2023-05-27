import Head from 'next/head';
import Image from 'next/image';

import Link from 'next/link';
import Footer from '../components/footer';

const name = 'Beck';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
       
      </Head>

     <header>HEADER
      </header>

      <main>{children}</main>

      {!home && (
        <div>
          <Link href="/">← Back to home</Link>
        </div>
      )}
      <Footer/>
    </>
  );
}