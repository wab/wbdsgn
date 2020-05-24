import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Prism from 'prismjs';
import Layout from '@components/layout';
import '../styles.css';

function App({ Component, pageProps }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

export default App;
