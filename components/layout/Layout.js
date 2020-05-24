import PropTypes from 'prop-types';
import styled from 'styled-components';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const MainWrapper = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  min-height: calc(75vh - 100px);
  padding: 2rem;
  background-color: #f9f9f9;
  border-bottom: 1px solid #f2f2f2;
`;

const Layout = ({ children }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* facicons */}
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon alternate"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon alternate"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="apple-mobile-web-app-title" content="jérôme boileux" />
      <meta name="application-name" content="jérôme boileux" />
      <meta name="theme-color" content="#ffffff" />
    </Head>

    <Header />

    <MainWrapper>{children}</MainWrapper>

    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
