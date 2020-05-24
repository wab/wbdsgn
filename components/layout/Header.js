import styled from 'styled-components';

const Wrapper = styled.header``;

const Header = () => (
  <Wrapper>
    <div>
      <img src="/avataaars.png" alt="avatar" width="120" />
    </div>
    <p>jérôme boileux • frontend engineer</p>
    <blockquote>Responding to complexity with simplicity</blockquote>
  </Wrapper>
);

export default Header;
