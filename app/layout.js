'use client';
import { Provider } from 'mobx-react';
import { AttorneyStore } from './stores/AttorneyStore';

const attorneyStore = AttorneyStore.create({ attorneys: [] });

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider attorneyStore={attorneyStore}>
      <Component {...pageProps} />
    </Provider>
  );
}

