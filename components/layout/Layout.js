import PropTypes from 'prop-types';
import Head from 'next/head';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div className="container mx-auto">
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* facicons */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="alternate icon" href="/favicon.ico" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ff8a01" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="apple-mobile-web-app-title" content="jérôme boileux" />
      <meta name="application-name" content="jérôme boileux" />
      <meta name="theme-color" content="#ffffff" />
    </Head>

    <Header />
    <Navigation />

    <main>{children}</main>

    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
