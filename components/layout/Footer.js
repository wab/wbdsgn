import styled from 'styled-components';

const Wrapper = styled.footer``;

const Footer = () => (
  <Wrapper>
    <ul>
      <li>
        <a
          href="https://github.com/wab"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/github.svg" alt="github Logo" />
          github
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/wabdesign"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/twitter.svg" width="32" alt="twitter Logo" />
          twitter
        </a>
      </li>
      <li>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel Logo" />
        </a>
      </li>
    </ul>
  </Wrapper>
);

export default Footer;
