import type { NextPage } from 'next';
import Head from 'next/head';

import GithubSvg from '../assets/GithubSvg';

const Home: NextPage = () => {
  console.log('window.Telegram', window.Telegram);
  console.log('window.WebApp', window.Telegram.WebApp);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-telegram-white">
      <Head>
        <title>HEADER</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-4 text-center">
        <span className="text-2xl font-bold text-telegram-black">
          HI {(window.Telegram.WebApp.initData as any).user.first_name}
          {(window.Telegram.WebApp.initData as any).user.last_name}
        </span>
      </main>

      <footer className="flex h-20 w-full items-center justify-center border-t border-t-telegram-black">
        FOOTER
      </footer>
    </div>
  );
};

export default Home;
