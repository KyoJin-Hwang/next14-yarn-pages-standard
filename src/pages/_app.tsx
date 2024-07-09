import type { AppProps } from 'next/app';

import Layout from '@/layouts/Layout';

import { Global } from '@emotion/react';
import globalSteyls from '@styles/globalStyles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Global styles={globalSteyls} />
      <Component {...pageProps} />
    </Layout>
  );
}
