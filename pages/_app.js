import localFont from 'next/font/local';

import '../styles/global.scss';

const gotham = localFont({
  src: [
    {
      path: '../public/fonts/Gotham-Book.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Gotham-BookItalic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/Gotham-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Gotham-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Gotham-Black.woff2',
      weight: '900',
      style: 'normal',
    }
  ],
});
 
export default function App({ Component, pageProps }) {
  return (
       <main className={gotham.className}>
      <Component {...pageProps} />
    </main>
  );
}