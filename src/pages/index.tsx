import type { NextPage } from 'next';
import Head from 'next/head';

import GithubSvg from '../assets/GithubSvg';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-telegram-white">
      <Head>
        <title>HEADER</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-4 text-center">
        <span className="text-2xl font-bold text-telegram-black">
          HI {window.Telegram.WebApp.initDataUnsafe.user?.first_name}
          {window.Telegram.WebApp.initDataUnsafe.user?.last_name}
        </span>
        <button onClick={() => Telegram.WebApp.sendData('aha')}>ahaa</button>
      </main>

      <footer className="flex h-20 w-full items-center justify-center border-t border-t-telegram-black">
        FOOTER
      </footer>
    </div>
  );
};

export default Home;
