import PropTypes from 'prop-types';
import Head from 'next/head';

export default function PostHead({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* <meta
        property="og:image"
        content="https://wabdesign.fr/banner-wide.png"
      /> */}
      <meta property="og:image:width" content="1600" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content="https://wabdesign.fr" />
      <meta property="og:type" content="website" />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@wabesign" />
      {/* <meta name="twitter:image" content="https://wabdesign.fr/banner.png" /> */}
    </Head>
  );
}

PostHead.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
