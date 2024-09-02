import Head from 'next/head';

import { Dracula } from '@themes/dracula';
import { DATA } from '@lib/data';
import { GA4 } from '@utils/ga4';

export default function Home() {
  const { user } = DATA;
  const GA4ID = process.env.NEXT_PUBLIC_GA4_ID;

  return (
    <>
      <Head>
        <title>{`${user.fullname} - ${user?.role}`}</title>
        <meta name="description" content={user.bio} />
        <link rel="icon" href="/images/favicon.png" />
        <link rel="icon" href="/images/favicon.svg" type="image/svg+xml" />

        <meta name="robots" content="index,follow" />

        <meta property="og:title" content={user.fullname} />
        <meta property="og:description" content={user.bio} />
        <meta property="og:type" content="website" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-0547898817705259"
     crossorigin="anonymous"></script>
      </Head>
      <Dracula data={DATA} />
      {GA4ID && <GA4 ga4Id={GA4ID} />}
    </>
  );
}
