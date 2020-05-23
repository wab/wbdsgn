import Head from 'next/head';
export default function Home() {
  return (
    <div>
      <Head>
        <title>jérôme boileux • frontend developer</title>
        <meta
          name="description"
          content="making quality websites and webapps"
        />
      </Head>
      <h1>
        Hey! Welcome&nbsp;
        <span role="img" aria-label="hello">
          👋
        </span>
      </h1>
    </div>
  );
}
