import { AppProps } from 'next/app';
import Head from 'next/head';
import { FC } from 'react';
import { ContextProvider } from '../contexts/ContextProvider';
import { AppBar } from '../components/AppBar';
import { ContentContainer } from '../components/ContentContainer';
import { Footer } from '../components/Footer';
import Notifications from '../components/Notification'
require('@solana/wallet-adapter-react-ui/styles.css');
require('../styles/globals.css');

const App: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
          <Head>
            <title>Tsuki Raffler</title>
          </Head>

          <ContextProvider>
            <div className="flex flex-col h-[100vh] w-full items-center justify-center ">
              <Notifications />
          {/*      <AppBar/>  */}
              <ContentContainer >
                <Component {...pageProps} />
              {/*   <Footer/> */}
              </ContentContainer>
            </div>
          </ContextProvider>
        </>
    );
};

export default App;
