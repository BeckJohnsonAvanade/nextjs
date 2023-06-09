import Head from 'next/head'
import Link from 'next/link';
import Layout, { siteTitle } from '../layouts/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>HEllo world</p>

       
       <a className="btn-primary btn-sm">Button</a>
              <button className="btn-primary">Button</button>

          <a className="btn-secondary">Button</a>
          <a className="btn-filter">Filter button</a>
          <a className="btn-secondary disabled">Button</a>
              <button className="btn-secondary btn-lg" disabled>Button</button>
         
    
      </section>


       <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}